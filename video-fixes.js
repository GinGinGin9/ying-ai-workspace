(() => {
  const videoTitles = {
    '1VUd3TOj6qdnYuNazFzN9SsJBIKK_y28z': '产品操作视频',
    '1-LxF7sNQq0Rwa22kqEn8-nsUmn-mVgys': '世界环境日',
    '1qqvm3lsZGIGRYDfipAufALuGHOQ9ShKt': '国际妇女和女童科学日',
    '1oGVDqsm2a6DGCMuq2C-YIwPeQy8pVgU7': 'PANDA Mini 情人节'
  };

  document.querySelectorAll('.video-tile[data-drive]').forEach(tile => {
    const id = tile.dataset.drive;
    const img = tile.querySelector('.video-cover img');
    if (img) {
      // Always preview the actual video file. This intentionally overrides any old poster mapping.
      img.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
      img.loading = 'lazy';
    }

    const meta = tile.querySelector('.tile-meta');
    if (meta && !meta.querySelector('.drive-link')) {
      const link = document.createElement('a');
      link.className = 'drive-link';
      link.href = `https://drive.google.com/file/d/${id}/view`;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.innerHTML = '<span>Google Drive</span><b>↗</b>';
      link.setAttribute('aria-label', `在 Google Drive 打开${videoTitles[id] || '视频'}`);
      link.addEventListener('click', e => e.stopPropagation());
      meta.appendChild(link);
    }

    tile.addEventListener('click', () => {
      // app.js opens the Drive preview first; add an explicit fallback link beneath it.
      requestAnimationFrame(() => {
        const modalContent = document.querySelector('#modalContent');
        if (!modalContent || modalContent.querySelector('.modal-drive-link')) return;
        const link = document.createElement('a');
        link.className = 'modal-drive-link';
        link.href = `https://drive.google.com/file/d/${id}/view`;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.innerHTML = `<span>如果内嵌播放器没有加载，直接在 Google Drive 打开</span><b>↗</b>`;
        modalContent.appendChild(link);
      });
    });
  });
})();
