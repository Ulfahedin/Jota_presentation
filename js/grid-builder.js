
;(function ($) {
    function GridBuilder (container, options) {
        this.container = container;
        this.options = options;

        this._constructor = function () {
            console.log(this);
            this.options?.items?.forEach((item) => {
                this.container?.append(
                    $('<div class="card-container">').append(
                        $('<div class="card-title">').html(item.title),
                        $('<div class="image-container">').append(
                            $('<img src="'+item.image+'">')
                        ),
                        $('<div class="button-container">').append(
                            $('<button class="btn btn-outline-success btn-card">').html(
                                '<i class="far fa-play-circle"></i>      ' +
                                'Play Video'
                            )
                            .on('click', function () {
                                Modal.show('kit1231231');

                            })
                        )
                    )
                    /*$('<video class="grid__video-container">').append(
                        $('<source src="'+item.src+'">>')
                    )*/
                );
            });
        };

        this._constructor();
    };
    $.fn.grid_builder = function(options) {
        return new GridBuilder(
            $(this),
            $.extend(true,
                {
                    items: []
                },
                options
            )
        );
    }
})(jQuery);
