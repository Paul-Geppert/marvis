window.addEventListener('load', function() {
    var seperator = ' - ';
    var release = DOCUMENTATION_OPTIONS.VERSION;
    var releaseParts = release.split(seperator);
    var version = releaseParts[0];
    var currentBranch = releaseParts.slice(1).join(seperator) || "master";

    var sideBar = document.getElementsByClassName('wy-nav-side')[0];
    function createElement(parent, tag, attributes, innerHTML) {
        var element = parent.appendChild(document.createElement(tag));
        if (attributes) {
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    element.setAttribute(key, attributes[key]);
                }
            }
        }
        if (innerHTML) {
            element.innerHTML = innerHTML;
        }
        return element;
    }

    var versionsContainer = createElement(sideBar, 'div', {
        'class': "rst-versions",
        'data-toggle': "rst-versions",
        role: "note",
        'aria-label': "versions",
    });

    var currentVersionContainer = createElement(versionsContainer, 'span', {
        'class': 'rst-current-version',
        'data-toggle': 'rst-current-version',
    });

    createElement(currentVersionContainer, 'span', {
        'class': 'fa fa-book',
    }, ' Other Versions');
    currentVersionContainer.appendChild(document.createTextNode(release + ' '))
    createElement(currentVersionContainer, 'span', {
        'class': 'fa fa-caret-down',
    });
    var otherVersionsContainer = createElement(versionsContainer, 'div', {
        'class': 'rst-other-versions',
    });

    var innerVersionsContainer = createElement(otherVersionsContainer, 'dl');
    createElement(innerVersionsContainer, 'dt', {}, 'Versions');
    createElement(createElement(createElement(innerVersionsContainer, 'strong'), 'dd'), 'a', {}, version);

    var branchesContainer = createElement(otherVersionsContainer, 'dl');
    createElement(branchesContainer, 'dt', {}, 'Branches');

    var branches = ["master", "actions-ci", "add-license", "bugfix/docsbuild", "cleanup", "delete_old_examples", "example/diak", "feat/devices_in_docker_containers", "feat/standalone_nodes", "feature/additional_addresses_for_interface", "feature/cv2x", "feature/devices_in_docker", "feature/dummy-interfaces", "feature/non-root-user", "feature/routing-config-on-node", "fix/remove_veth_pair_after_simulation", "gh-pages", "interface_names", "linting", "mobility_input", "new-naming-marvis", "onboarding", "qemu_branch", "readthedocs", "renaming-v2", "thesis"];
    for (var i = 0; i < branches.length; i++) {
        var branch = branches[i];
        var container = branchesContainer;
        if (branch === currentBranch) {
            container = createElement(container, 'strong');
        }
        createElement(createElement(container, 'dd'), 'a', {
            'href': "https://diselab.github.io/marvis/" + branch,
        }, branch);
    }
});
