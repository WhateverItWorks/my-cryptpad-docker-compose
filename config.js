module.exports = {
    httpUnsafeOrigin: 'https://docs.whateveritworks.org',
    httpSafeOrigin: "https://sandbox.whateveritworks.org",
    maxWorkers: 4,
    adminKeys: [changethis@changethis/changethis]

    ],
  
    inactiveTime: 7, // days
    archiveRetentionTime: 7,
    accountRetentionTime: 7,
    disableIntegratedEviction: false,
    maxUploadSize: 20 * 1024 * 1024,
    premiumUploadSize: 100 * 1024 * 1024,
    filePath: './datastore/',
    archivePath: './data/archive',
    pinPath: './data/pins',
    taskPath: './data/tasks',
    blockPath: './block',
    blobPath: './blob',
    blobStagingPath: './data/blobstage',
    decreePath: './data/decrees',
    logPath: 'false',
    logToStdout: false,
    logLevel: 'info',
    logFeedback: false,
    verbose: false,
    installMethod: 'unspecified',
};
