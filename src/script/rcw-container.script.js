export const launchOpenContainerListener = () => {
    const launcher = document.getElementsByClassName('rcw-launcher')[0];
    if (launcher) {
        launcher.addEventListener('click', (e) => {
            const container = document.getElementsByClassName('rcw-widget-container')[0];
            if (container) {
                container.classList.add('opened')
            }
            setTimeout(
                () => {
                    const close = document.getElementsByClassName('rcw-close-button')[0];
                    console.log(close);
                    if (close) {
                        close.addEventListener('click', (e) => {

                            console.log(container.classList);
                            container.classList.remove('opened')

                        });
                    }
                }, 200
            )
        });
    }

}

export const closeLauncher = () => {
    const container = document.getElementsByClassName('rcw-widget-container')[0];
    if (container) {
        container.classList.remove('opened');
    }
}