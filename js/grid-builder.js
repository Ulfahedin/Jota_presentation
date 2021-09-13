
;(function ($) {
    function GridBuilder (container, options) {
        const GridBuilder = this;
        this.container = container;
        this.options = options;

        this.clickVideo = function ($video) {
            $video[0].volume = 0.2;

            console.log($video[0].duration);

        };



        this.playVideo = function ($video) {
            if(typeof $('#' + $video)[0] !== 'undefined'){
                $('#' + $video)[0].play();
            }
        };

        this.stopVideo = function ($video) {
            if(typeof $('#' + $video)[0] !== 'undefined'){
                $('#' + $video)[0].pause();
            }
        };

        this.setVolume = function ($video, volume) {
            if(typeof $('#' + $video)[0] !== 'undefined'){
                $('#' + $video)[0].volume = volume;
            }
        };

        this._constructor = function () {
            console.log(this);
            this.options?.items?.forEach((item) => {
                if(item.link){

                    this.container?.append(
                        $('<div class="card-container d-flex align-items-center justify-content-center">').append(
                            $('<div class="link-container '+(item.class ? item.class : '')+'">').append(
                                $('<div class="link-text">').html(item.text),
                                $('<i class="fas fa-long-arrow-alt-right">')
                            )
                        ).on('click', function () {
                          window.open('./' + item.link, '_self');
                        })
                    );
                    return
                }
                this.container?.append(
                    $('<div class="card-container">').append(
                        $('<div class="card-title">').html(item.title),
                        $('<div class="image-container">').append(
                            $('<img src="'+item.image+'">')
                        ),
                        $('<div class="button-container">').append(
                            $('<button class="btn btn-outline-success btn-card ripple '+(item.src ? '' : 'disabled')+'">').html(
                                '<i class="far fa-play-circle"></i>      ' +
                                'Play Video'
                            )
                            .on('click', function () {
                                const video_id = 'video_' + Date.now();
                                Modal.show('kit_modal', {
                                    body: $('<video id="'+video_id+'" class="grid__video-container" preload="auto" controls>').append(
                                        $('<source src="'+item.src+'">')
                                    )
                                    .on('click', function () {
                                        GridBuilder.clickVideo($(this));
                                    })
                                    .on('ended', function () {
                                        $('#close_modal').trigger('click');
                                    })
                                    .on('play', function () {

                                        GridBuilder.setVolume(video_id,0);
                                    }),
                                    afterShow: (data) => {
                                        GridBuilder.playVideo(video_id);
                                    },
                                    afterClose: (data) => {
                                        GridBuilder.stopVideo(video_id);
                                    }
                                });

                            })
                        )
                    )
                );
            });
            rippleListener();
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
