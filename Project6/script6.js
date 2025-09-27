const inserter = document.getElementById('row');
window.addEventListener('keydown' , (e) => {
    inserter.innerHTML = `
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>KeyName</th>
        </tr>
        <tr>
            <td>${(e.key === ' ' ? "space" : e.key)}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    `;
});