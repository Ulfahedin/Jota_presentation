
function ModalClass(opts) {
    const ModalClass = this;
    this.options = $.extend(true, {}, opts);
    this.modalWindow = null;

    this.show = (idModal, opts) => {
        if(!$('#' + idModal).length) {
            $('body').append(
                $('<div id="'+idModal+'" class="modal-window modal">')
            );
        }
        $('#' + idModal).append(
            $('<div class="modal-dialog modal-'+(opts.size ? opts.size : 'lg')+' modal-dialog-centered">').append(
                $('<div class="modal-content">').append(
                    opts.header ? opts.header : '',
                    $('<div class="modal-body d-flex align-items-center justify-content-center" >').append(
                        opts.body
                    ),
                    $('<div class="modal-footer">').append(
                        $('<button id="close_modal" type="button" class="btn btn-outline-danger btn-sm" data-bs-dismiss="modal">').html('Close')
                    )
                )
            )
        );
        let modalContainer = document.querySelector('#' + idModal);

        this.modalWindow = new bootstrap.Modal(modalContainer, {
            focus: true,
            keyboard: true
        });
        console.log(this.modalWindow);
        modalContainer.addEventListener('shown.bs.modal', () => {
            opts.afterShow(opts);
        });
        modalContainer.addEventListener('hide.bs.modal', () => {
            opts.afterClose(opts);
            $('#' + idModal).empty();
        });

        this.modalWindow.show();
    };
}
const Modal = new ModalClass();
