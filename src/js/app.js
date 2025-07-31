var appdom = window.appdom =function () { };
appdom.layout={
  this.contents=[];
  this.load=function(){
    appdom.layout.header("Replace With A Title");
    appdom.layout.body("here's the body");
    appdom.layout.footer("copyright alright reserved");
    appdom.layout.script();
    var app=appdom.layout.render();
    const dom = document.getElementById("approot");
    dom.append(app);
  }
  this.render=function(){
    var content="";
    appdom.layout.contents.foreach((val)=>{
      content +=val;
    });
    var dom=`
    <!Doctype html>
        ${content}
    </html>
    `;
    return dom;
  }
  this.header=function(title){
    var temp=`<head>
        <title>${title}</title>
    </head>
    `;
    appdom.layout.contents.push(temp);
  }
  this.body=function(content){
    var temp =`
    <body>
      ${content}
    </body>
    `;
    appdom.layout.contents.push(temp);
  }
  this.footer=function(content){
    var temp =`
    <footer>
      ${content}
    </footer>
    `;
    appdom.layout.contents.push(temp);
  }
  this.script=function(content=" "){
    var temp =`
    <script>
      ${content}
    </script>
    `;
    appdom.layout.contents.push(temp);
  }
}
appdom.page={}
appdom.init=function(){
  appdom.layout.load();
}
appdom.init();
