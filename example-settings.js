import ExampleSettings from './components/ExampleSettings.vue';

// eslint-disable-next-line no-undef
kiwi.plugin('example-settings', (kiwi) => {
    // Create our default settings
    checkDefault('example-settings.show_button', true);
    checkDefault('example-settings.button_text', 'Click Me!');

    // Add our settings tab using the ExampleSettings Component
    kiwi.addTab('settings', 'Example Settings', ExampleSettings);

    // Create an inline component for adding as our button
    const button = new kiwi.Vue({
        template: `
            <div v-if="showButton" @click="buttonClicked()" style="border: 1px solid white; margin: 20px; padding: 5px; cursor: pointer;">
                <span>{{ buttonText }}</span>
            </div>`,
        computed: {
            showButton() {
                return kiwi.state.setting('example-settings.show_button');
            },
            buttonText() {
                return kiwi.state.setting('example-settings.button_text');
            },
        },
        methods: {
            buttonClicked() {
                // eslint-disable-next-line no-alert
                alert('Ouch! what was that for?');
            },
        },
    });

    // Mount our component
    button.$mount();

    // Add our components element to the ui
    kiwi.addUi('browser', button.$el);

    // We use checkDefault because settings from config are loaded before plugins
    function checkDefault(dotNotation, value) {
        let setting = kiwi.state.getSetting('settings.' + dotNotation);
        if (typeof setting === 'undefined') {
            kiwi.state.setSetting('settings.' + dotNotation, value);
        }
    }
});
