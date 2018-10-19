<template>
    <div>
        <div class="kiwi-appsettings-block">
            <h3>Example Settings</h3>
            <div class="kiwi-appsettings-section">
                <label class="u-checkbox-wrapper">
                    <span>Show Button</span>
                    <input v-model="settingsShowButton" type="checkbox">
                </label>
                <label class="kiwi-appsettings-full">
                    <span>Button Text</span>
                    <input v-model="settingsButtonText" class="u-input">
                </label>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * Returns an object for a vuejs computated property on a state settings value
 * This allows default settings from the server config, but overrides with user config
 */
function bindSetting(settingName) {
    return {
        get: function settingGetter() {
            return this.$state.setting(settingName);
        },
        set: function settingSetter(newVal) {
            this.$state.setting(settingName, newVal);
        },
    };
}
// checkDefault('example-settings.show_button', true);
//     checkDefault('example-settings.button_text', 'Click Me!')
export default {
    data() {
        return {

        };
    },
    computed: {
        settingsShowButton: bindSetting('example-settings.show_button'),
        settingsButtonText: bindSetting('example-settings.button_text'),
    },
    methods: {

    },
};
</script>
