import router from '@/router'
export default {
    namespaced: true,
    state: {
        editableTabsValue: "1",
        editableTabs: [
            {
                title: "首页",
                name: "1",
                close: false,
                to: "Default",
            },
        ],
        tabIndex: 1,
        count: 0,
    },
    getters: {
    },
    mutations: {
        addTab(state, targetName) {
            let num = true;
            for (let i = 0; i < state.editableTabs.length; i++) {
                if (state.editableTabs[i].title === targetName.title) {
                    num = false;
                }
            }
            if (num) {
                let newTabName = ++state.tabIndex + "";
                state.editableTabs.push({
                    title: targetName.title,
                    name: newTabName,
                    close: true,
                    to: targetName.path,
                });
                state.editableTabsValue = newTabName;
            }
        },
        // removeTabs
        removeTab(state, targetName) {
            let tabs = state.editableTabs;
            let activeName = state.editableTabsValue;
            let len = tabs.length;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }
            state.tabIndex = state.tabIndex - 1;
            state.editableTabsValue = state.tabIndex - 1;
            state.editableTabs = tabs.filter((tab) => tab.name !== targetName);
            // 关闭标签后跳转至第一个
            state.count++;
            if (targetName == len) {
                let path = state.editableTabs[targetName - 2].to;
                router.push(path)
            }
            else if (len == 2) {
                state.count = 0;
                router.push('/home')
            }
            else {
                let path = state.editableTabs[targetName - state.count].to;
                router.push(path)
            }
        },
    },
    actions: {
    },
}