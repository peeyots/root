// グローバルナビの挙動制御
// 1) ドロップダウン内のメニュー項目を選択したら、ページ遷移前にドロップダウンを閉じる
// 2) bfcache（ブラウザの戻る/進む）から復帰したときに開いたままにならないよう閉じる
(function () {
  function closeAllDropdowns() {
    document
      .querySelectorAll('.site-nav details.nav-dropdown[open]')
      .forEach(function (d) {
        d.removeAttribute('open');
      });
  }

  document
    .querySelectorAll('.site-nav .nav-dropdown-menu a')
    .forEach(function (link) {
      link.addEventListener('click', closeAllDropdowns);
    });

  window.addEventListener('pageshow', closeAllDropdowns);
})();
