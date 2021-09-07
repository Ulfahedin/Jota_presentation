
;(function ($) {
    function GridBuilder (container, options) {
        this.container = container;
        this.options = options;

        this._constructor = function () {
            console.log(this);
            this.options?.items?.forEach((item) => {
                this.container?.append(
                    $('<video class="grid__video-container">').append(
                        $('<source src="'+item.src+'">>')
                    )
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
