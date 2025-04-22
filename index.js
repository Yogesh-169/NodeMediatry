const NodeMediaServer = require('node-media-server');

const config = {
    logType: 3, // 0 - disable, 1 - error, 2 - warn, 3 - info, 4 - debug
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,
        allow_origin: '*'
    },
    trans: {
        ffmpeg: 'C:/ffmpeg/bin/ffmpeg',

        tasks: [
            {
                app: 'live',
                hls: true,
                hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                dash: true,
                dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
            }
        ]
    }
};

const nms = new NodeMediaServer(config);
nms.run();
