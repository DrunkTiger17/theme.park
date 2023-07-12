
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                    
.__  .__  __    __  .__        ___.   .__                 __                              
|  | |__|/  |__/  |_|  |   ____\_ |__ |  |  __ __   _____/  |_  ______  _  __ ___________ 
|  | |  \   __\   __\  | _/ __ \| __ \|  | |  |  \_/ __ \   __\/  _ \ \/ \/ // __ \_  __ \
|  |_|  ||  |  |  | |  |_\  ___/| \_\ \  |_|  |  /\  ___/|  | (  <_> )     /\  ___/|  | \/
|____/__||__|  |__| |____/\___  >___  /____/____/  \___  >__|  \____/ \/\_/  \___  >__|   
                              \/    \/                 \/                        \/     
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
