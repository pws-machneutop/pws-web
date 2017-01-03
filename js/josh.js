var josh = {
    clearPrompt: function() {
        var iv_input = document.getElementById("menu");
        var invoervak = document.getElementById("tv");

        var command = document.createElement("div");
        command.className = "dostext";
        command.innerHTML = '<table width="100%" border="0"><tr><td width="30">J:\\&gt; ' + iv_input.value + '</td></tr></table>';
        invoervak.parentNode.insertBefore(command, invoervak);

        iv_input.value = "";
    }
}