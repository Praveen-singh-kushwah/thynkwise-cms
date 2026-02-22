module.exports = () => ({
    ckeditor5: {
        enabled: true,
        config: {
            presets: {
                defaultHtml: {
                    editorConfig: {
                        htmlSupport: {
                            allow: [
                                {
                                    name: /.*/,
                                    attributes: true,
                                    classes: true,
                                    styles: true,
                                },
                            ],
                        },

                        // enable source editing mode
                        toolbar: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            'link',
                            'bulletedList',
                            'numberedList',
                            '|',
                            'insertTable',
                            'imageUpload',
                            '|',
                            'undo',
                            'redo',
                            '|',
                            'sourceEditing',
                        ],
                    },
                },
            },
        },
    },
});
