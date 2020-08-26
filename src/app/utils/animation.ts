export function addLoadingAnimation(loadingScreen: HTMLElement) {
    const spinner = `
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>`;
    for (let i = 0; i < 5; i++) {
      loadingScreen.innerHTML += spinner;
    }
}
