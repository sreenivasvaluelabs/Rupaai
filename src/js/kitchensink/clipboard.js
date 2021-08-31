var clipboard = new ClipboardJS('.btn-copy');
clipboard.on('success', function(e) {
    e.clearSelection();
});
clipboard.on('error', function(e) {
});