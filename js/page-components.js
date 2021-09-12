
function ModalClass(opts) {
    this.options = $.extend(true, {}, opts);
    this.modalWindow = null;

    this.show = (idModal, opts) => {
        $('body').append(
            $('<div id="'+idModal+'" class="modal-window modal">')
        );
        $('#' + idModal).append(
            $('<div class="modal-dialog modal-dialog-centered">').append(
                $('<div class="modal-content">').append(
                    $('<div class="modal-header">'),
                    $('<div class="modal-body">'),
                    $('<div class="modal-footer">').append(
                        $('<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">').html('Close')
                    )
                )
            )
        );
        let modalContainer = document.querySelector('#' + idModal);

        this.modalWindow = new bootstrap.Modal(modalContainer);
        console.log(this.modalWindow)
        this.modalWindow.show();
    };
}
const Modal = new ModalClass();
