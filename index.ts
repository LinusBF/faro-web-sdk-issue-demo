import {
    ConsoleInstrumentation,
    ConsoleTransport,
    ErrorsInstrumentation,
    FetchTransport,
    initializeFaro,
    LogLevel,
    SessionInstrumentation,
    WebVitalsInstrumentation,
} from '@grafana/faro-web-sdk';

const faro = initializeFaro({
    instrumentations: [
        new ErrorsInstrumentation(),
        new WebVitalsInstrumentation(),
        new ConsoleInstrumentation({
            disabledLevels: [LogLevel.TRACE, LogLevel.ERROR], // console.log will be captured
        }),
        new SessionInstrumentation(),
    ],
    transports: [
        new FetchTransport({
            url: 'http://localhost:12345/collect',
            apiKey: 'secret',
        }),
        new ConsoleTransport(),
    ],
    app: {
        name: 'frontend',
        version: '1.0.0',
    },
});
