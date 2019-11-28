#### Variables
NS3_VERSION := 3.30
# NS3_DOWNLOAD_SHA1 := 8e712a744a07318d0416dbf85137d11635a02e9d # 3.29
NS3_DOWNLOAD_SHA1 := b4d40bb9777ee644bdba50e3a2e221da85715b4e # 3.30

export COLOREDLOGS_DATE_FORMAT = %H:%M:%S
export COLOREDLOGS_LOG_FORMAT = %(asctime)s %(name)-20s %(levelname)-8s %(message)s
export COLOREDLOGS_LOG_LEVEL = DEBUG
export COLOREDLOGS_LEVEL_STYLES = debug=cyan;warning=yellow;error=red;critical=red,bold
export COLOREDLOGS_AUTO_INSTALL = true

#### Local variables
include Makefile.local

#### Default variables
NS3_BASE ?= ${CURDIR}/ns3
NS3_HOME := ${NS3_BASE}/ns-${NS3_VERSION}
NS3_INSTALL ?= ${NS3_BASE}/install/ns-${NS3_VERSION}
CASTXML_BASE ?= ${NS3_BASE}/CastXML
CASTXML_INSTALL ?= ${NS3_BASE}/install/castxml

export PYTHONPATH := ${PYTHONPATH}:${NS3_INSTALL}/lib/python3.7/site-packages
export LD_LIBRARY_PATH := ${LD_LIBRARY_PATH}:${NS3_INSTALL}/lib
export PATH := ${PATH}:${NS3_INSTALL}/bin:${CASTXML_INSTALL}/bin

PIPENV_INSTALL := ${VIRTUAL_ENV}/.last-install
NS3_DOWNLOAD ?= ${NS3_HOME}.tar.bz2

#### Targets
.PHONY: shell env vscode-setup init pipenv clean uninstall-ns3

all: shell

shell:
	@if [ `id -u` -eq 0 ]; then \
		env -u MAKELEVEL PIPENV_DONT_LOAD_ENV=1 pipenv shell || echo "Exit code: $$?"; \
	else \
		sudo $(MAKE) $@; \
	fi

env:
	env
	echo ${NS3_DOWNLOAD}
	echo ${CPP}

vscode-setup: .virtualenv .env
	pipenv install --dev

.virtualenv:
	ln -s `pipenv run pipenv --venv` $@

.env: Makefile Makefile.local
ifneq "${VIRTUAL_ENV}" ""
	${error Do not update the .env file within a virtual envirenment}
endif
	@echo "# autogenerated via Makefile\n\
	\n\
	PYTHONPATH=${PYTHONPATH}\n\
	LD_LIBRARY_PATH=${LD_LIBRARY_PATH}\n\
	\n\
	# generated at `date`" | tee $@

Makefile.local:
	touch $@

init: ${NS3_HOME}.installed ${PIPENV_INSTALL}

${PIPENV_INSTALL}: Pipfile | pipenv
	pipenv install
	touch $@

${CASTXML_DOWNLOAD}: ${CASTXML_BASE}
	cd ${CASTXML_BASE}/.. && git clone https://github.com/CastXML/CastXML.git


${CASTXML_INSTALL}: ${CASTXML_DOWNLOAD}
	cd ${NS3_BASE}/CastXML && cmake -DCMAKE_INSTALL_PREFIX=${CASTXML_INSTALL} . && make && make install

${NS3_HOME}.installed: ${NS3_DOWNLOAD} | pipenv ${PIPENV_INSTALL} ${CASTXML_INSTALL}
	mkdir -p ${NS3_BASE} ${NS3_INSTALL}
	tar xvj --strip-components 1 -C ${NS3_BASE} -f ${NS3_DOWNLOAD}
	patch ${NS3_HOME}/src/netanim/wscript netanim_python_${NS3_VERSION}.patch
	cd ${NS3_BASE}/netanim* && qmake NetAnim.pro && make
	cd $(NS3_HOME) && python3 ./waf configure && python3 ./waf --apiscan=netanim
	cd ${NS3_BASE} && python3 ./build.py -- --prefix=${NS3_INSTALL}
	cd ${NS3_HOME} && ./waf install
	touch $@

${NS3_DOWNLOAD}:
	mkdir -p ${dir ${NS3_DOWNLOAD}}
	curl -L -o $@ https://www.nsnam.org/releases/ns-allinone-${NS3_VERSION}.tar.bz2
	echo "${NS3_DOWNLOAD_SHA1} $@" | sha1sum -c 

ifeq "${VIRTUAL_ENV}" ""
pipenv:
	${info Run `make shell` first:}
	${info }
	${info   make shell}
	${info }
	${error Not in a pipenv envirenment}
else
pipenv:
endif

clean: uninstall-ns3

uninstall-ns3:
	${RM} -r ${NS3_BASE}
