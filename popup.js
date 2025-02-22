let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
            code: `
                document.querySelector('div[role="button"][data-tab-id="2"]').click();
                document.querySelector('div[aria-live="polite"]').style.backgroundColor = "${color}";
            `}
        );
    });
};