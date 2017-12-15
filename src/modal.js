import getTransitionDuration from 'get-transition-duration';

export default class Modal extends HTMLElement {
    constructor() {
        super();

        console.log(this.getAttribute('opened'), typeof this.getAttribute('opened'));
        this.body = this.querySelector('main[slot="body"]');

        this.header = this.querySelector('[slot="header"]');

        console.log(this.header);

        if (this.hasAttribute('cross')) {
            const modalCloser = document.createElement('a');
            modalCloser.onclick = 'document.querySelector("modal-window").close()';
            modalCloser.classList.add('modal-closer');
            modalCloser.innerHTML = '×';
            this.header.appendChild(modalCloser);
        }

        if (this.hasAttribute('overlay')) {
            this.addEventListener('click', e => {
                this.opened = false;
            });
        }

        if (this.hasAttribute('esc')) {
            document.addEventListener('keyup', e => {
                    if (e.keyCode === 27) {
                        this.opened = false;
                    }
                },
                true /* grab event on tunnel, not on bubble */);
        }

        this.body.addEventListener('click', e => {
            e.stopPropagation();
        });

        this.body.querySelector('[slot=submit]').addEventListener('click', function(e) {
                this.submit();
            }.bind(this)
        );

        this.body.querySelector('[slot=cancel]').addEventListener('click', function(e) {
                this.submit();
            }.bind(this)
        );

        this.opened = this.opened;
    }

    get opened() {
        return this.getAttribute('opened') === 'true';
    }

    set opened(val) {
        if (val) {
            this.setAttribute('opened', val.toString());
            this.body.classList.add('active');
            document.querySelector('body').style.height = '100%';
            document.querySelector('body').style.overflow = 'hidden';
        }
        else {
            this.body.classList.remove('active');
            const hideModal = function (self) {
                    this.setAttribute('opened', val.toString());
                }.bind(this);
            this.body.addEventListener('transitionend', hideModal);
            document.querySelector('body').style.height = 'auto';
            document.querySelector('body').style.overflow = 'auto';
        }
    }

    open() {
        this.opened = true;
    }

    close() {
        this.opened = false;
    }

    submit() {
        //placeholder
        this.opened = false
    }

    cancel() {
        //placeholder
        this.opened = false
    }
}


customElements.define('modal-window', Modal);