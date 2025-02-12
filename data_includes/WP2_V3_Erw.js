PennController.ResetPrefix(null);
PennController.AddHost("https://amor.cms.hu-berlin.de/~elericha/reise/");

PennController.Sequence("Info",
                        "Consent",
                        "Code",
                        "Counter",
                        "StartProbe",
                        "Einleitung",
                        "Beispiel",
                        "Probedurchlauf",
                        "Los",
                        "EinleitungStudie",
                        "Studie",
                        "AufmerksamkeitZelten",
                        "Studie2",
                        "AufmerksamkeitHotel",
                        "Studie3",
                        "Ende",
                        "Meta-Fragen1","Meta2", "Meta3", "Feedback","Aufwand","send","Final");
PennController.DebugOff();
var progressBarText = "Fortschritt";

PennController.SetCounter("Counter","inc",1)

//WILLKOMMENSSEITE & INFOBLATT

PennController("Info",
        newImage("HU","HU-Logo.jpeg")  
        .size(90,90)
        ,
        newImage("RUEG","dfg_rueg_header.jpg")
        .size(220,60)
        ,newImage ("DFG", "DFG-logo.jpeg")
        .size (140,65)
        ,
        newCanvas("Logosnebeneinander",1138,100) //bildet den Header mit Logos
        .add(250,0, getImage("HU"))
        .add(430,15, getImage("RUEG"))
        .add(760,15, getImage("DFG"))
        .center()
        .print()
        ,
        newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
        newHtml("willkommen", "information.html") //htmls müssen unter resources gepeichert werden
            .center()
            .settings.css("font-size", "large")
            .print()
,
newButton("Weiter","Weiter")
    .settings.css ("font-size", "18px")
    .center()
    .print()
    .wait()
     
    )
//New Consent 
//Mit Boxen zum Anklicken und Dateien zum herunterladen; angelehnt an C04

PennController("Consent",
    newImage("HU","HU-Logo.jpeg")  
    .size(90,90)
    ,
    newImage("RUEG","dfg_rueg_header.jpg")
    .size(220,60)
    ,newImage ("DFG", "DFG-logo.jpeg")
    .size (140,65)
    ,
    newCanvas("Logosnebeneinander",1138,100) //bildet den Header mit Logos
    .add(250,0, getImage("HU"))
    .add(430,15, getImage("RUEG"))
    .add(760,15, getImage("DFG"))
    .center()
    .print()
    ,
        newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
    newHtml("Consent", "consent.html")
        .center()
        .settings.css("font-size", "large")
        .print()
    ,
       newText("Leerzeile2"," <br></p>")
        .center()
        .print()
        ,
    newButton("Weiter","Weiter")
        .settings.css ("font-size", "18px")
         .print()
         .log()
         .wait(
             getHtml("Consent").test.complete() //testet ob alle Boxen im Htmldokument angeklickt wurden
            .failure(newText ("errorconsent", "Damit es weitergeht, müssen beide Boxen angeklickt werden.")
            .settings.color("red")
            .settings.css ("font-size", "18px")
                   .center()
                   .print()) //gibt einen warntext aus falls nicht
             )
)

//CODE-EINGABE
PennController("Code",
    newImage("HU","HU-Logo.jpeg")  
    .size(90,90)
    ,
    newImage("RUEG","dfg_rueg_header.jpg")
    .size(220,60)
    ,newImage ("DFG", "DFG-logo.jpeg")
    .size (140,65)
    ,
    newCanvas("Logosnebeneinander",1138,100) //bildet den Header mit Logos
    .add(250,0, getImage("HU"))
    .add(430,15, getImage("RUEG"))
    .add(760,15, getImage("DFG"))
    .center()
    .print()
    ,
        newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
    newHtml("Code", "code.html")
        .center()
        .settings.css("font-size", "large")
        .print()
  ,
    newTextInput("Texteingabe-Code")
        .settings.size(200,30)
        .center()
        .print()
        
    ,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
    ,
    getTextInput("Texteingabe-Code")
            .log("final")
    ,
    newButton("weiter","zur Anleitung")
    .settings.css ("font-Size", "18px")
        .center()
        .print()
        .wait(
            getTextInput("Texteingabe-Code").test.text(/^.+/)
                    .failure( newText('errorcode', "<br>Bitte gib Deinen Code ein.").color("red") .center().print() )
            )
    ,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
);
    
//Anleitung und Probedurchlauf 

//Einleitung nur als kurzer Text
PennController ("StartProbe",

newText ("Heading-Start",  "<p><b>Anleitung</b></p>")
   .settings.css ("font-size", "22px")
   .center()
   ,

           newText("StartProbe","<p><br>Im Folgenden stellen wir dir eine Situation vor. Du wirst gebeten, dich in diese Situation hineinzuversetzen. </br> <br> Danach wirst du <b>einige Bilder sehen</b> und <b>Sätze anhören.</b> </br> <br>Deine Aufgabe besteht nun darin, diese  <b> Sätze </b> mithilfe einer Skala zu <b> bewerten. </b> Ab und zu wirst du gebeten, <b> Fragen </b> zu den Sätzen, die du gehört hast, zu <b> beantworten.</b> </br> <br> Klicke auf &bdquo;Weiter&ldquo;, um zu der Situation zu gelangen, in die du dich hineinversetzen sollst. Wir erklären dann anhand eines Beispiels nach und nach, was deine genaue Aufgabe ist. </br> <br> Bereit? Dann klicke jetzt auf &bdquo;Weiter&ldquo;. </br> </p>")
             .settings.css("font-family", "calibri").settings.css("font-size", "20px")
              .center()
       ,
          newButton("Weiter", "Weiter")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
        .center()
        ,
       newCanvas(1000,400)
       .settings.add (250,0,getText ("Heading-Start"))
       .settings.add(250, 30, getText("StartProbe"))
       .settings.add (250,370, getButton ("Weiter"))
           .center()
           .print()
         ,
           newText("Leerzeile"," <br></p>")
                  .center()
                .print()
                 
    ,
    getButton ("Weiter")
    .wait()
       
       );
PennController ("Einleitung",

   newText ("Heading-Einleitung",  "<p><b>Gesprächssituation</b></p>")
   .settings.css ("font-size", "22px")
   .center()
   ,
   newImage("Einleitungsbild","Einleitung_Freundinnen-web.jpg") 
               .size(600,400)
               .center()
   ,
           newText("Einleitung","<p> <br> <b> Stell dir folgende Situation vor: </b> </br> <br> Zwei Freundinnen haben sich lange nicht mehr gesehen und treffen sich in einem Café. Sie trinken gemeinsam einen Kaffee und unterhalten sich dabei. </br> <br> Die eine Freundin war gerade im Urlaub und erzählt der anderen, was sie dort erlebt hat. </br> <br> Ab und zu zeigt sie der Freundin Fotos vom Urlaub auf ihrem Handy, um ihre Geschichte zu veranschaulichen. </br> </p>")
             .settings.css("font-family", "calibri").settings.css("font-size", "18px")
             .size (500,400)
              .center()
   ,
    newButton("Weiter", "Weiter")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
        .center()
       ,
       newCanvas("EinleitungsCanvas",1500,500)
       .settings.add (150,0, getImage ("Einleitungsbild"))
       .settings.add(770,0, getText ("Heading-Einleitung"))
           .add(770, 40, getText("Einleitung"))
           .add (770,370, getButton ("Weiter"))
           .center()
           .print()
        
               
       ,
       getButton ("Weiter")
       .wait()
       , 
       newText("Leerzeile4"," <br> </br></p>")
                  .center()
                  .print()
                  
      
       );
PennController ("Beispiel",
newText ("Heading-Beispiel",  "<b>Gesprächssituation</b>")
   .settings.css ("font-size", "22px")
   .center()
   ,
   newText ("LeerzeileB", "<br> </br>")
   .center()
   .print()
       ,
      newImage("Kuhbild","Bild2-Kuh.jpg") //nimmt sich aus der OG-audios Tabelle immer das nächste Bild 
              .center()
              .size(300,450)
         ,
       newText("Beispiel","Hier siehst du die Bilder, die sie gemacht hat. Gleich hörst du dazu einige Sätze der Unterhaltung. </br> <br> Deine Aufgabe besteht darin, diese Sätze zu bewerten.</br> <br> Zu jedem Bild werden mehrere Sätze abgespielt. Nach jedem Satz wollen wir wissen:</br> <br> <b>Klingt der Satz wie etwas, das jemand so sagen würde? </b> </br><br>Jetzt gibt es einen Probedurchlauf. </br></p>")
             .settings.css("font-family", "calibri").settings.css("font-size", "20px")
              .center()
       
       ,
       newButton("Weiter", "Weiter")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
       .settings.center()
       ,
       newCanvas ("Durchlauf", 1500,500)
           .add( 0, 0, getImage("Kuhbild"))
           .add (350,0, getText ("Heading-Beispiel"))
           .add (350,40, getText ("Beispiel"))
           .add (350,425, getButton ("Weiter"))
           .print()
       ,
   getButton("Weiter").wait( )
   );

   Template ("probe.csv", row =>

   PennController ("Probedurchlauf",
   
   newText ("Anleitung", "<br><b>Schritt 1:</b> Klicke den Play-Button, um den  Satz anzuhören.</br> <br> </br>")
   .settings.css ("font-size", "18px")
   .center()
   .unfold(2000)
   ,

   newAudio("Audio",row.Audio ) //nimmt sich aus der OG-audios Tabelle immer das nächste Audio 
          .center()
     ,
  newImage("Image",row.Image) //nimmt sich aus der OG-audios Tabelle immer das nächste Bild 
          .center()
          .size(300,450)
     ,
     newText("Bewertung","<p><br> </br> <br><b>Schritt 2:</b> Bitte den angehörten Satz bewerten.</br> <br> Inwiefern stimmst du der folgenden Aussage zu? </br> </br> <nobr> <b> <br>Der Satz klingt wie etwas, das jemand so sagen würde. </b> </nobr> </br> </p>")
     .settings.css("font-family", "calibri").settings.css("font-size", "18px")
      .center()
    ,
    newText ("errorscale", "Bitte Punkt auf der Skala wählen.")
    .color("red") 
    .center()
    .hidden()
    ,
    newText ("erroraudio", "Bitte höre dir die Audiodatei an, bevor du sie bewertest.")
            .color("red") 
            .center()
            .hidden ()
            ,
    newScale("Skala1", 7)
    .settings.css("font-family", "calibri").settings.css("font-size", "20px")
    .settings.labelsPosition("bottom").color("white")
        
    .settings.before(newText("labelleft","<em><nobr>ich stimme</nobr> <nobr> vollkommen zu </nobr></em>"))
    .settings.after(newText("labelright","<em><nobr>ich stimme</nobr> <nobr>überhaupt nicht zu</em></nobr>"))
    .log ("all")
    .center()
    ,

   newText ("counter", row.Anzahl)
   .settings.css ("font-size", "18px")
   .settings.css("")
   ,
   newButton("Weiter", "Weiter")
    .settings.css("font-family", "calibri").settings.css("font-size", "18px")
   .settings.center()
   ,
   newCanvas ("Durchlauf", 1500,500)
        .color ("white")
       .add( 0, 0, getImage("Image"))
       .add (350,0, getText ("counter"))
       .add( 350, 50, getAudio("Audio"))
       .add (450,390, getText ("erroraudio"))
       .add (450,440, getText ("errorscale"))
       .add (350,100, getText ("Bewertung"))
       .add (350,330, getScale ("Skala1"))
       .add (350,420, getButton ("Weiter"))
       .print()
   ,
getButton("Weiter").wait(
  getScale("Skala1").test.selected()
         .failure( getText("errorscale").settings.visible())
          .and(
         getAudio("Audio").test.hasPlayed()
             .failure( getText("erroraudio").settings.visible ())))
             
           
   
   )
   .log ("Audio", row.Audio)
   .log ("item", row.item)
   ); 
       
//Zwischenstopp zwischen Probe und Hauptteil 
       PennController ("Los",

       newText ("Probe","<br> </br> <p> <b>Das war der Probedurchlauf! </b> </br> <br> Vergiss bitte nicht, dass du manchmal dazu aufgefordert wirst, </br>Fragen zu einigen Sätzen zu beantworten. </br> <br> Klicke auf &quot;Start&quot;, um mit der Studie zu beginnen. </br></p>")
       .settings.css("font-family", "calibri").settings.css("font-size", "20px")
       ,
       newButton("Weiter", "Start")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
        .settings.bold ()
            ,
    newCanvas ("LosCanvas",1000,260)
            .settings.add (250,0,getText ("Probe"))
            .settings.add (250,230,getButton ("Weiter"))
            .center()
            .color ("white")
            .print()
            
            ,
        
    getButton ("Weiter")
            .wait()
       );
    //Hauptteil
       PennController ("EinleitungStudie",

       newText ("Heading-Einleitung",  "<p><b>Gesprächssituation</b></p>")
       .settings.css ("font-size", "22px")
       .center()
       ,
       newImage("Einleitungsbild","Einleitung_Freundinnen-web.jpg") 
                   .size(600,400)
                   .center()
       ,
               newText("Einleitung","<p> <br> <b> Stell dir folgende Situation vor: </b> </br> <br> Zwei Freundinnen haben sich lange nicht mehr gesehen und treffen sich in einem Café. Sie trinken gemeinsam einen Kaffee und unterhalten sich dabei. </br> <br> Die eine Freundin war gerade im Urlaub und erzählt der anderen, was sie dort erlebt hat. </br> <br> Ab und zu zeigt sie der Freundin Fotos vom Urlaub auf ihrem Handy, um ihre Geschichte zu veranschaulichen. </br> </p>")
                 .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                 .size (500,400)
                  .center()
       ,
        newButton("Weiter", "Weiter")
            .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .center()
           ,
           newCanvas("EinleitungsCanvas",1500,500)
           .settings.add (150,0, getImage ("Einleitungsbild"))
           .settings.add(770,0, getText ("Heading-Einleitung"))
               .add(770, 40, getText("Einleitung"))
               .add (770,370, getButton ("Weiter"))
               .center()
               .print()
            
                   
           ,
           getButton ("Weiter")
           .wait()
           , 
           newText("Leerzeile4"," <br> </br></p>")
                      .center()
                      .print()
                      
          
           );
    //Studie Teil 1        
   Template ("OGaudios.csv", row =>
   
   PennController ("Studie",
   
   
   newText ("Anleitung", "<br>Klicke den Play-Button, um den  Satz anzuhören.</br> <br> </br>")
   .settings.css ("font-size", "18px")
   .center()
   .unfold(2000)
   ,

   newAudio("Audio",row.Audio ) //nimmt sich aus der OG-audios Tabelle immer das nächste Audio 
          .center()
     ,
  newImage("Image",row.Image) //nimmt sich aus der OG-audios Tabelle immer das nächste Bild 
          .center()
          .size(300,450)
     ,
     newText("Bewertung","<p><br> </br> <br>Bitte den angehörten Satz bewerten.</br> <br> Inwiefern stimmst du der folgenden Aussage zu? </br> </br> <nobr> <b> <br>Der Satz klingt wie etwas, das jemand so sagen würde. </b> </nobr> </br> </p>")
     .settings.css("font-family", "calibri").settings.css("font-size", "18px")
      .center()
    ,
    newText ("errorscale", "Bitte Punkt auf der Skala wählen.")
        .color("red") 
        .center()
        .hidden()
    ,
    newText ("erroraudio", "Bitte höre dir die Audiodatei an, bevor du sie bewertest.")
                .color("red") 
                .center()
                .hidden ()
                ,
        newScale("Skala1", 7)
        .settings.css("font-family", "calibri").settings.css("font-size", "20px")
        .settings.labelsPosition("bottom").color("white")
            
    .settings.before(newText("labelleft","<em><nobr>ich stimme</nobr> <nobr> vollkommen zu </nobr></em>"))
    .settings.after(newText("labelright","<em><nobr>ich stimme</nobr> <nobr>überhaupt nicht zu</em></nobr>"))
        .log ("all")
        .center()
        ,

   newText ("counter", row.Anzahl)
   .settings.css ("font-size", "18px")
   .settings.css("")
   ,
   newButton("Weiter", "Weiter")
    .settings.css("font-family", "calibri").settings.css("font-size", "18px")
   .settings.center()
   ,
   newCanvas ("Durchlauf", 1500,500)
        .color ("white")
       .add( 0, 0, getImage("Image"))
       .add (350,0, getText ("counter"))
       .add( 350, 50, getAudio("Audio"))
       .add (350,100, getText ("Bewertung"))
       .add (350,320, getScale ("Skala1"))
       .add (450,390, getText ("erroraudio"))
       .add (450,440, getText ("errorscale"))
       .add (350,420, getButton ("Weiter"))
       .print()
   ,
   getButton("Weiter").wait(
    getScale("Skala1").test.selected()
           .failure( getText("errorscale").settings.visible())
            .and(
           getAudio("Audio").test.hasPlayed()
               .failure( getText("erroraudio").settings.visible ())))
     )
      .log ("Audio", row.Audio)
      .log ("Group", row.Group)
      .log ("item", row.item)
      ); 
   // Aufmerksamkeitstest 1: Zelten 

   PennController ("AufmerksamkeitZelten",
       newText ("Frage", "<br>Bitte beantworte kurz die folgende Frage:</br> <br> </br>")
           .settings.css ("font-size", "18px")
           .center()
           .unfold(2000)
           ,
   
          newImage("Zelten","Bild2-Zelten.jpg") //nimmt sich aus der OG-audios Tabelle immer das nächste Bild 
                  .center()
                  .size(300,450)
             ,
           newText("Zelten","<p>Wurde das Zelt am Strand aufgeschlagen?</p>")
                 .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                  .center()
               ,
           newDropDown ("DropTent",  "<br>" +"Bitte eine Option ausw&auml;hlen")
                  .settings.add("Ja","Nein")
                  .log()
           ,
           newButton("Weiter", "Weiter")
            .settings.css("font-family", "calibri").settings.css("font-size", "18px")
           .settings.center()
           ,
           newCanvas ("Durchlauf", 5000,500)
           .color ("white")
               .add( 0, 0, getImage("Zelten"))
               .add (350,100, getText ("Zelten"))
               .add (350,200, getDropDown ("DropTent"))
               .add (350,300, getButton ("Weiter"))
               .print()
           ,
       getButton("Weiter").wait(
          getDropDown("DropTent").test.selected()
                 .failure( newText('errorage', "<br>Bitte wähle eine Antwort aus.").color("red") .center().print() )
                   ) 
                     
   );
   // Studie Teil 2 
   Template ("OGaudios2.csv", row =>
   
   PennController ("Studie2",
   
  
   newText ("Anleitung", "<br>Klicke den Play-Button, um den  Satz anzuhören.</br> <br> </br>")
   .settings.css ("font-size", "18px")
   .center()
   .unfold(2000)
   ,

   newAudio("Audio",row.Audio ) //nimmt sich aus der OG-audios Tabelle immer das nächste Audio 
          .center()
     ,
  newImage("Image",row.Image) //nimmt sich aus der OG-audios Tabelle immer das nächste Bild 
          .center()
          .size(300,450)
     ,
     newText("Bewertung","<p><br> </br> <br>Bitte den angehörten Satz bewerten.</br> <br> Inwiefern stimmst du der folgenden Aussage zu? </br> </br> <nobr> <b> <br>Der Satz klingt wie etwas, das jemand so sagen würde. </b> </nobr> </br> </p>")
     .settings.css("font-family", "calibri").settings.css("font-size", "18px")
      .center()
    ,
    newText ("errorscale", "Bitte Punkt auf der Skala wählen.")
        .color("red") 
        .center()
        .hidden()
    ,
    newText ("erroraudio", "Bitte höre dir die Audiodatei an, bevor du sie bewertest.")
                .color("red") 
                .center()
                .hidden ()
                ,
        newScale("Skala1", 7)
        .settings.css("font-family", "calibri").settings.css("font-size", "20px")
        .settings.labelsPosition("bottom").color("white")
            
    .settings.before(newText("labelleft","<em><nobr>ich stimme</nobr> <nobr> vollkommen zu </nobr></em>"))
    .settings.after(newText("labelright","<em><nobr>ich stimme</nobr> <nobr>überhaupt nicht zu</em></nobr>"))
        .log ("all")
        .center()
        ,

   newText ("counter", row.Anzahl)
   .settings.css ("font-size", "18px")
   .settings.css("")
   ,
   newButton("Weiter", "Weiter")
    .settings.css("font-family", "calibri").settings.css("font-size", "18px")
   .settings.center()
   ,
   newCanvas ("Durchlauf", 1500,500)
        .color ("white")
       .add( 0, 0, getImage("Image"))
       .add (350,0, getText ("counter"))
       .add( 350, 50, getAudio("Audio"))
       .add (350,100, getText ("Bewertung"))
       .add (350,320, getScale ("Skala1"))
       .add (450,390, getText ("erroraudio"))
       .add (450,440, getText ("errorscale"))
       .add (350,420, getButton ("Weiter"))
       .print()
   ,
   getButton("Weiter").wait(
    getScale("Skala1").test.selected()
           .failure( getText("errorscale").settings.visible())
            .and(
           getAudio("Audio").test.hasPlayed()
               .failure( getText("erroraudio").settings.visible ())))
     )
      .log ("Audio", row.Audio)
      .log ("Group", row.Group)
      .log ("item", row.item)
      ); 
    // Aufmerksamkeitstest 2: Hotel 
   PennController ("AufmerksamkeitHotel",
       newText ("Frage", "<br>Bitte beantworte kurz die folgende Frage:</br> <br> </br>")
           .settings.css ("font-size", "18px")
           .center()
           .unfold(2000)
           ,
   
          newImage("Hotel","Bild5-Hotel.jpg") //nimmt sich aus der OG-audios Tabelle immer das nächste Bild 
                  .center()
                  .size(300,450)
             ,
           newText("Hotel","<p>Gab es im Hotel eine Sauna?</p>")
                 .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                  .center()
               ,
           newDropDown ("DropHotel",  "<br>" +"Bitte eine Option ausw&auml;hlen")
                  .settings.add("Ja","Nein")
                  .log()
           ,
           newButton("Weiter", "Weiter")
            .settings.css("font-family", "calibri").settings.css("font-size", "18px")
           .settings.center()
           ,
           newCanvas ("Durchlauf", 5000,500)
           .color ("white")
               .add( 0, 0, getImage("Hotel"))
               .add (350,100, getText ("Hotel"))
               .add (350,200, getDropDown ("DropHotel"))
               .add (350,300, getButton ("Weiter"))
               .print()
           ,
       getButton("Weiter").wait(
          getDropDown("DropHotel").test.selected()
                 .failure( newText('errorage', "<br>Bitte wähle eine Antwort aus.").color("red") .center().print() )
                   ) 
                     
                   
           
   
   .log("DropHotel")
   
   );
   Template ("OGaudios3.csv", row =>
   
   PennController ("Studie3",
   
 
   newText ("Anleitung", "<br>Klicke den Play-Button, um den  Satz anzuhören.</br> <br> </br>")
   .settings.css ("font-size", "18px")
   .center()
   .unfold(2000)
   ,

   newAudio("Audio",row.Audio ) //nimmt sich aus der OG-audios Tabelle immer das nächste Audio 
          .center()
     ,
  newImage("Image",row.Image) //nimmt sich aus der OG-audios Tabelle immer das nächste Bild 
          .center()
          .size(300,450)
     ,
     newText("Bewertung","<p><br> </br> <br>Bitte den angehörten Satz bewerten.</br> <br> Inwiefern stimmst du der folgenden Aussage zu? </br> </br> <nobr> <b> <br>Der Satz klingt wie etwas, das jemand so sagen würde. </b> </nobr> </br> </p>")
     .settings.css("font-family", "calibri").settings.css("font-size", "18px")
      .center()
    ,
    newText ("errorscale", "Bitte Punkt auf der Skala wählen.")
        .color("red") 
        .center()
        .hidden()
    ,
    newText ("erroraudio", "Bitte höre dir die Audiodatei an, bevor du sie bewertest.")
                .color("red") 
                .center()
                .hidden ()
                ,
        newScale("Skala1", 7)
        .settings.css("font-family", "calibri").settings.css("font-size", "20px")
        .settings.labelsPosition("bottom").color("white")
            
    .settings.before(newText("labelleft","<em><nobr>ich stimme</nobr> <nobr> vollkommen zu </nobr></em>"))
    .settings.after(newText("labelright","<em><nobr>ich stimme</nobr> <nobr>überhaupt nicht zu</em></nobr>"))
        .log ("all")
        .center()
        ,

   newText ("counter", row.Anzahl)
   .settings.css ("font-size", "18px")
   .settings.css("")
   ,
   newButton("Weiter", "Weiter")
    .settings.css("font-family", "calibri").settings.css("font-size", "18px")
   .settings.center()
   ,
   newCanvas ("Durchlauf", 1500,500)
        .color ("white")
       .add( 0, 0, getImage("Image"))
       .add (350,0, getText ("counter"))
       .add( 350, 50, getAudio("Audio"))
       .add (350,100, getText ("Bewertung"))
       .add (350,320, getScale ("Skala1"))
       .add (450,390, getText ("erroraudio"))
       .add (450,440, getText ("errorscale"))
       .add (350,420, getButton ("Weiter"))
       .print()
   ,
   getButton("Weiter").wait(
    getScale("Skala1").test.selected()
           .failure( getText("errorscale").settings.visible())
            .and(
           getAudio("Audio").test.hasPlayed()
               .failure( getText("erroraudio").settings.visible ())))
     )
      .log ("Audio", row.Audio)
      .log ("Group", row.Group)
      .log ("item", row.item)
      ); 
    // Ende der Studie und Überleitung zum Fragebogen 

   PennController ("Ende",
       
       newText ("Danke", "<p align=center > <br> <b>Vielen Dank!</b></br></p> <p><br> Jetzt bitten wir dich, einen Fragebogen auszufüllen, der uns bei der Auswertung unserer Studie helfen wird. </br> <br> Hier fragen wir dich nach einigen persönlichen Angaben (z.B. Alter, Ausbildung) sowie Informationen zu deinen Sprachkenntnissen und deinem persönlichen Sprachgebrauch.</br> <br> </br> </p>" )
       .settings.css ("font-size", "18px")
       .center()
       .print()
       ,
       newButton ("Weiter", "Weiter")
       .settings.css ("font-size", "18px")
       .center()
       .print ()
       .wait()
   );
    // Fragebogen Meta 1 
    PennController ("Meta-Fragen1",
    newImage("HU","HU-Logo.jpeg")  
                .size(90,90)
             ,
            newImage("RUEG","dfg_rueg_header.jpg")
                .size(220,60)
            ,newImage ("DFG", "DFG-logo.jpeg")
                .size (140,65)
            ,
             newCanvas("Logosnebeneinander",1138,100) //bildet den Header mit Logos
                .add(207,0, getImage("HU"))
                .add(500,15, getImage("RUEG"))
                .add(885,15, getImage("DFG"))
                .color ("white")
                .center()
                .print()
            ,
        newText("Leerzeile"," <br></p>")
        .center()
        .print()
    ,
    newText("Alter", "Wie alt bist du? &ensp; &ensp; ")
            .settings.css("font-size", "18px")
            .settings.bold()
            .center()
            .settings.after (newTextInput("AlterIn")
        .log().settings.after (newText ("errorAlter", "&ensp; Bitte gib dein Alter an.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ))
        ,
        newDropDown("IdentityDrop", "Bitte auswählen")
            .settings.add("Divers", "Weiblich", "Männlich")
            .settings.size (150,20)
            .log()
            .settings.before (newText("Geschlechtsidentität", "Welcher Geschlechtsidentität fühlst du dich zugehörig? &ensp; &ensp;")
            .settings.css("font-size", "18px")
            .settings.bold()
            .center())
            .settings.after (newText ("errorIdentity", "&ensp; Bitte auswählen")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       )
    ,
        newText("Wohnort", "Aktueller Wohnort &ensp; &ensp;")
            .settings.css("font-size", "18px")
            .settings.bold()
            .settings.after (newTextInput("WohnortIn").log().settings.after (newText ("errorWohnort", "&ensp; Bitte gib deinen Wohnort an.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ))
            .center(),
        newText("SeitWohnort","Seit welchem Lebensalter wohnst du hier? &ensp; &ensp;")
            .settings.css("font-size", "18px")
            .settings.bold()
            .settings.after (newTextInput("SeitWohnortIn").settings.size (170,20).log().settings.after (newText ("errorSeitWann", "&ensp; Bitte gib an, seit welchem Alter du hier wohnst.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ))
            .center(),
      
        newText("Geburtsort", "<b>Geburtsort &ensp; &ensp; </b> </br> <small>Bitte Land, Stadt angeben. &ensp; &ensp; <small>")
        .settings.css("font-size", "18px")
        .settings.after (newTextInput ("GeburtIn").log().settings.after (newText ("errorGeburt", "&ensp; Bitte gib deinen Geburtsort an.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       )),
        newText("AndereOrte", "<br><b>Falls zutreffend, gib bitte vorherige Wohnorte an. Welche Lebensjahre hast du dort verbracht? </br> </b> <small> Bitte Land, Stadt angeben. </small> </br>")
            .settings.css("font-size", "18px")
            .center()
            ,
        newText ("WohnortA", "1. Wohnort")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
         newText ("WohnortB", "2. Wohnort")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
         newText ("WohnortC", "3. Wohnort")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
         newText ("WohnortD", "4. Wohnort")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
         newText ("WohnortE", "5. Wohnort")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newTextInput ("WohnAIn")
        .settings.size (270,20)
        .log(),
        newTextInput ("WohnBIn")
        .settings.size (270,20)
        .log(),
        newTextInput ("WohnCIn")
        .settings.size (270,20)
        .log(),
        newTextInput ("WohnDIn")
        .settings.size (270,20)
        .log(),
        newTextInput ("WohnEIn")
        .settings.size (270,20)
        .log(),
        newText ("VonA", "<b>Alter beim Hinzug </b> </br> <small>z.B. 5 &#040;Jahre&#041; </small>")
        .settings.css("font-size", "16px")
            .center(),
        newText ("BisA", "<b>Alter beim Wegzug</b> </br> <small> z.B. 12 &#040;Jahre&#041;</small>")
        .settings.css("font-size", "16px")
            .center(),
        newTextInput ("AlterAAIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterABIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterBAIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterBBIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterCAIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterCBIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterDAIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterDBIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterEAIn")
        .settings.size (100,20)
        .log(),
         newTextInput ("AlterEBIn")
        .settings.size (100,20)
        .log(),
        newDropDown("BildungDrop", "Bitte eine Option ausw&auml;hlen")
        .settings.add("kein Abschluss","Schulabschluss","Abitur oder gleichwertiger Abschluss","Ausbildung","Studium ohne Abschluss","Bachelor","Master","Magister","Diplom", "Promotion", "Sonstige")
        .settings.size (340,20)
        .log()
        .settings.before (newText ("Bildung", "Höchster Bildungsabschluss &ensp; &ensp;")
        .settings.css("font-size", "18px")
            .settings.bold())
        .settings.after (newText ("errorBildung", "&ensp;Bitte auswählen")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ())
         ,
        
        newText ("Studium", "<b>Studierst du? </b> <small> Falls ja, welches Fach und welches Semester? </small> &ensp; ")
        .settings.css ("font-size", "18px")
        .center()
        .settings.after (newTextInput ("StudiumIn")
        .settings.size (220,20).settings.after (newText ("errorStudium", "&ensp;Bitte beantworten")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ())),
        newCanvas("Fragen1",1000,600)
            .settings.add(150,0, getText("Alter"))
            .settings.add(150,50, getDropDown("IdentityDrop"))
            .settings.add(150,100, getText("Wohnort"))
            .settings.add(150,130, getText("SeitWohnort"))
            .settings.add(150,180, getText ("Geburtsort"))
            .settings.add(150,220, getText ("AndereOrte"))
            .settings.add (150,330, getText ("WohnortA"))
            .settings.add (150,360, getText ("WohnortB"))
            .settings.add (150,390, getText ("WohnortC"))
            .settings.add (150,420, getText ("WohnortD"))
            .settings.add (150,450, getText ("WohnortE"))
            .settings.add(280,330, getTextInput ("WohnAIn"))
            .settings.add(280,360, getTextInput ("WohnBIn"))
            .settings.add(280,390, getTextInput ("WohnCIn"))
            .settings.add(280,420, getTextInput ("WohnDIn"))
            .settings.add(280,450, getTextInput ("WohnEIn"))
            .settings.add(620,280, getText ("VonA"))
            .settings.add(780,280, getText ("BisA"))
            .settings.add(620,330, getTextInput ("AlterAAIn"))
            .settings.add(780,330, getTextInput ("AlterABIn"))
            .settings.add(620,360, getTextInput ("AlterBAIn"))
            .settings.add(780,360, getTextInput ("AlterBBIn"))
            .settings.add(620,390, getTextInput ("AlterCAIn"))
            .settings.add(780,390, getTextInput ("AlterCBIn"))
            .settings.add(620,420, getTextInput ("AlterDAIn"))
            .settings.add(780,420, getTextInput ("AlterDBIn"))
            .settings.add(620,450, getTextInput ("AlterEAIn"))
            .settings.add(780,450, getTextInput ("AlterEBIn"))
            .settings.add(150,520, getDropDown ("BildungDrop"))
            .settings.add(150,560, getText ("Studium"))
        .center()
        .print()
        ,
        newButton ("Weiter", "Weiter")
        .center()
       ,
       newCanvas ("ButtonCanvas",1000,60)
       .settings.add (420,20, getButton ("Weiter"))
       .print()
       ,
       getButton ("Weiter")
    .wait(newFunction('dummy', ()=>true).test.is(true)
    .and(getTextInput ("AlterIn").test.text(/^.+/)
    .failure (getText ("errorAlter").settings.visible()))
    .and (getDropDown ("BildungDrop").test.selected()
    .failure (getText ("errorBildung").settings.visible()))
    .and (getDropDown ("IdentityDrop").test.selected()
    .failure (getText ("errorIdentity").settings.visible()))
    .and(getTextInput ("WohnortIn").test.text(/^.+/)
    .failure (getText ("errorWohnort").settings.visible()))
    .and(getTextInput ("SeitWohnortIn").test.text(/^.+/)
    .failure (getText ("errorSeitWann").settings.visible()))
    .and(getTextInput ("GeburtIn").test.text(/^.+/)
    .failure (getText ("errorGeburt").settings.visible()))
    .and(getTextInput ("StudiumIn").test.text(/^.+/)
    .failure (getText ("errorStudium").settings.visible()))
    )
      ,
                    getDropDown("IdentityDrop").wait("first")
                   ,
                   getDropDown("BildungDrop").wait("first")
                   
                ); 
     //Metadaten 2: Sprachbiographie
    PennController("Meta2",
        newImage("HU","HU-Logo.jpeg")  
                .size(90,90)
             ,
            newImage("RUEG","dfg_rueg_header.jpg")
                .size(220,60)
            ,newImage ("DFG", "DFG-logo.jpeg")
                .size (140,65)
            ,
             newCanvas("Logosnebeneinander",1138,100) //bildet den Header mit Logos
                .add(230,0, getImage("HU"))
                .add(450,15, getImage("RUEG"))
                .add(770,15, getImage("DFG"))
                .color ("white")
                .center()
                .print()
            ,
        newText("Leerzeile"," <br></p>")
        .center()
        .print()
        ,
        newFunction( () => window.scrollTo(0,0) ).call()
        
    ,
        newText ("AlterDeutsch", "In welchem Alter hast du angefangen, Deutsch zu lernen?")
            .settings.css("font-size", "18px")
            .settings.bold()
           
    ,
           newTextInput ("AlterDeutschIn")
           .settings.after (newText ("errorAlter", "&ensp; Bitte ausfüllen")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden())
           .size (200,20)
           .log()
           ,
            
        newCanvas("SprachenA", 1000, 60)
        .settings.add (150,0, getText ("AlterDeutsch"))
        .settings.add (150,30, getTextInput ("AlterDeutschIn"))
        .color ("white")
        .print()
        .center(),
 
       
    newText ("HäufigkeitDe", "<b>Wie häufig nutzt du Deutsch in den folgenden Bereichen?</b><br><small>Bitte wähle einen Punkt auf der Skala aus.</small>")
    ,
    newText ("HäufigkeitHeri", "<b>Wie häufig nutzt du diese Sprache in den folgenden Bereichen?</b><br><small>Bitte wähle einen Punkt auf der Skala aus.</small>")
    ,
    newText ("HäufigkeitE", "<b>Wie häufig nutzt du Englisch in den folgenden Bereichen?</b><br><small>Bitte wähle einen Punkt auf der Skala aus.</small>")
    ,
     
    newScale ("HäufigkeitDeBeiträgelesen", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
    newScale ("HäufigkeitDeBeiträgeschreiben", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
    newScale ("HäufigkeitDeVideos", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
    newScale ("HäufigkeitHeriBeiträgelesen", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
    newScale ("HäufigkeitHeriBeiträgeschreiben", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
    newScale ("HäufigkeitHeriVideos", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
        newScale ("HäufigkeitEBeiträgelesen", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
    newScale ("HäufigkeitEBeiträgeschreiben", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
    newScale ("HäufigkeitEVideos", "----1", "----2", "----3", "----4", "---5")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("sehr selten"))
            .settings.after (newText ("sehr oft"))
            .log ("final")
            .center()
            ,
     newText ("Deutsch", "Medienkonsum und Social Media auf Deutsch:")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
     newText ("Heri", "Medienkonsum und Social Media auf dieser Sprache:")
     .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
         newText ("Englisch", "Medienkonsum und Social Media auf Englisch:")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newTextInput ("SpracheHeriIn")
        .settings.size (270,20)
        .log(),
        newText ("DeBeiträgelesen", "Beiträge lesen")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText ("DeBeiträgeschreiben", "Beiträge schreiben")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText ("DeVideos", "Videos anschauen")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText ("errorHäufDeBl", "Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
     newText ("errorHäufDeBs","Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
     newText ("errorHäufDeV","Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
      newCanvas ("DeutschCanvas", 1000,220)
      .color ("white")
      .settings.add (150,20,getText("Deutsch"))
      .settings.add (150,50,getText ("HäufigkeitDe"))
      .settings.add (150,100, getText ("DeBeiträgelesen"))
      .settings.add (150,130, getText ("DeBeiträgeschreiben"))
      .settings.add (150,160, getText ("DeVideos"))
      .settings.add (370,100,getScale ("HäufigkeitDeBeiträgelesen"))
      .settings.add (370,130,getScale ("HäufigkeitDeBeiträgeschreiben"))
      .settings.add (370,160,getScale ("HäufigkeitDeVideos"))
      .settings.add (720,100, getText ("errorHäufDeBl"))
      .settings.add (720,130, getText ("errorHäufDeBs"))
      .settings.add (720,160, getText ("errorHäufDeV"))
      .center()
      .print()
     , 
     
     newText ("SpracheHeri", "Bist du mit einer weiteren Sprache in der Familie aufgewachsen?")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText ("SpracheHeriWelche", "Wenn ja, welche?</br>")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
     newDropDown ("AndereSprachenDrop", "&ensp; Bitte auswählen")
            .settings.add ("Ja", 
            "Nein")
            .settings.after (newText ("errorDrop", "&ensp; Bitte auswählen")
    .settings.css ("font-size", "14px")
    .color ("red")
    .settings.hidden())
            .log()
    
    ,
    newCanvas ("SprachenCanvasHeri", 1000,100)
      .settings.add (150,0,getText("SpracheHeri"))
      .settings.add (150,25, getDropDown ("AndereSprachenDrop"))
      .settings.add (150,60, getText ("SpracheHeriWelche"))
      .settings.add (150,85, getTextInput ("SpracheHeriIn"))
      .center()
      .print()
      , 
        newText ("HeriBeiträgelesen", "Beiträge lesen")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText ("HeriBeiträgeschreiben", "Beiträge schreiben")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText ("HeriVideos", "Videos anschauen")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
            newText ("errorHäufHeriBl", "Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
     newText ("errorHäufHeriBs","Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
     newText ("errorHäufHeriV","Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
    newCanvas ("HeriCanvas", 1000,240)
      .settings.add (150,30,getText("Heri"))
      .settings.add (150,70,getText ("HäufigkeitHeri"))
      .settings.add (150,120, getText ("HeriBeiträgelesen"))
      .settings.add (150,150, getText ("HeriBeiträgeschreiben"))
      .settings.add (150,180, getText ("HeriVideos"))
      .settings.add (370,120,getScale ("HäufigkeitHeriBeiträgelesen"))
      .settings.add (370,150,getScale ("HäufigkeitHeriBeiträgeschreiben"))
      .settings.add (370,180,getScale ("HäufigkeitHeriVideos"))
       .settings.add (720,120, getText ("errorHäufHeriBl"))
      .settings.add (720,150, getText ("errorHäufHeriBs"))
      .settings.add (720,180, getText ("errorHäufHeriV"))
      .center()
      .print()
      , 
      newText ("EnglischBeiträgelesen", "Beiträge lesen")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText ("EnglischBeiträgeschreiben", "Beiträge schreiben")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText ("EnglischVideos", "Videos anschauen")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
             newText ("errorHäufEBl", "Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
     newText ("errorHäufEBs","Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
     newText ("errorHäufEV","Bitte einen Wert anklicken")
        .settings.css ("font-size", "14px")
        .color ("red")
        .settings.hidden()
        ,
        newCanvas ("EnglischCanvas", 1000,240)
      .settings.add (150,30,getText("Englisch"))
      .settings.add (150,70,getText ("HäufigkeitE"))
      .settings.add (150,120, getText ("EnglischBeiträgelesen"))
      .settings.add (150,150, getText ("EnglischBeiträgeschreiben"))
      .settings.add (150,180, getText ("EnglischVideos"))
      .settings.add (370,120,getScale ("HäufigkeitEBeiträgelesen"))
      .settings.add (370,150,getScale ("HäufigkeitEBeiträgeschreiben"))
      .settings.add (370,180,getScale ("HäufigkeitEVideos"))
      .settings.add (720,120, getText ("errorHäufEBl"))
      .settings.add (720,150, getText ("errorHäufEBs"))
      .settings.add (720,180, getText ("errorHäufEV"))
      .center()
      .print()
      , 
        newButton ("Weiter", "Weiter"),
    
                       
    newCanvas ("ButtonCanvas", 1000,70)
    .settings.add (450,0, getButton ("Weiter"))
    .color ("white")
    .center()
    .print()
    ,
    getButton ("Weiter")
    .wait(newFunction('dummy', ()=>true).test.is(true)
    .and(getTextInput ("AlterDeutschIn").test.text(/^.+/)
    .failure (getText ("errorAlter").settings.visible()))
    .and( getScale ("HäufigkeitDeBeiträgelesen").test.selected()
    .failure (getText ("errorHäufDeBl").settings.visible()))
    .and( getScale ("HäufigkeitDeBeiträgeschreiben").test.selected()
    .failure (getText ("errorHäufDeBs").settings.visible()))
    .and( getScale ("HäufigkeitDeVideos").test.selected()
    .failure (getText ("errorHäufDeV").settings.visible()))
    .and( getScale ("HäufigkeitEBeiträgelesen").test.selected()
    .failure (getText ("errorHäufEBl").settings.visible()))
    .and( getScale ("HäufigkeitEBeiträgeschreiben").test.selected()
    .failure (getText ("errorHäufEBs").settings.visible()))
    .and( getScale ("HäufigkeitEVideos").test.selected()
    .failure (getText ("errorHäufEV").settings.visible()))
    .and (getDropDown ("AndereSprachenDrop").test.selected()
    .failure (getText ("errorDrop").settings.visible()))
    
    )
    );
    // Metadaten 3 Weitere Sprachkenntnisse 
    PennController("Meta3",
        newImage("HU","HU-Logo.jpeg")  
                .size(90,90)
             ,
            newImage("RUEG","dfg_rueg_header.jpg")
                .size(220,60)
            ,newImage ("DFG", "DFG-logo.jpeg")
                .size (140,65)
            ,
             newCanvas("Logosnebeneinander",1138,120) //bildet den Header mit Logos
                .add(230,0, getImage("HU"))
                .add(450,15, getImage("RUEG"))
                .add(770,15, getImage("DFG"))
                .color ("white")
                .center()
                .print()
            ,
     
        newFunction( () => window.scrollTo(0,0) ).call()
        ,
    
     newText ("KeineWeitere", "&ensp;Bitte scrolle weiter zum Abschnitt <b>Dialekt</b>")
     .settings.css ("font-size", "14px")
     .color ("green")
     .settings.hidden (),
     newDropDown ("WeitereSprachenDrop", "Bitte auswählen")
     .settings.add ("Ja", 
            "Nein")
     .settings.before (newText ("WeitereSprachen", "Hast du weitere Sprachkenntnisse?&ensp;") 
     .settings.css("font-size", "18px")
            .settings.bold()
            .center())
     .settings.after (newText ("errordrop", "&ensp;Bitte auswählen")
     .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ())
            .log()
               ,
    newCanvas ("WeitereSprachen", 1000,65)
    .center()
    .settings.add (550,50, getText ("KeineWeitere"))
    .settings.add (150,25, getDropDown ("WeitereSprachenDrop"))
    .color ("white")
    .print()
    ,
    getDropDown ("WeitereSprachenDrop")
    .settings.callback(getDropDown ("WeitereSprachenDrop").test.selected ("Nein")
    .success (getText ("KeineWeitere").settings.visible())),
    
    newText ("HäufigkeitWeiterA", "<b>Wie häufig nutzt du diese Sprache? &ensp; &ensp; </b><br><small>Bitte wähle einen Punkt auf der Skala aus. &ensp; &ensp;</small>")
    .settings.after (newScale ("HäufigkeitWeiterAV", "----1", "----2", "----3")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("selten"))
            .settings.after (newText ("oft"))
            .log ("final")
            .center())
    ,
    newText ("HäufigkeitWeiterB", "<b>Wie häufig nutzt du diese Sprache? &ensp; &ensp;</b><br><small>Bitte wähle einen Punkt auf der Skala aus. &ensp; &ensp; </small>")
    .settings.after (newScale ("HäufigkeitWeiterBV", "----1", "----2", "----3")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("selten"))
            .settings.after (newText ("oft"))
            .log ("final")
            .center()
            )
    ,
    newText ("HäufigkeitWeiterC", "<b>Wie häufig nutzt du diese Sprache? &ensp; &ensp; </b><br><small>Bitte wähle einen Punkt auf der Skala aus. &ensp; &ensp; </small>")
    .settings.after (  newScale ("HäufigkeitWeiterCV", "----1", "----2", "----3")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("selten"))
            .settings.after (newText ("oft"))
            .log ("final")
            .center()
            )
    ,
    newText ("HäufigkeitWeiterD", "<b>Wie häufig nutzt du diese Sprache? &ensp; &ensp; </b><br><small>Bitte wähle einen Punkt auf der Skala aus. &ensp; &ensp; </small>")
    .settings.after (newScale ("HäufigkeitWeiterDV", "----1", "----2", "----3")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("selten"))
            .settings.after (newText ("oft"))
            .log ("final")
            .center()
            )
    ,
    newText ("HäufigkeitWeiterE", "<b>Wie häufig nutzt du diese Sprache? &ensp; &ensp; </b><br><small>Bitte wähle einen Punkt auf der Skala aus. &ensp; &ensp; </small>")
    .settings.after ( newScale ("HäufigkeitWeiterEV", "----1", "----2", "----3")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before (newText ("selten"))
            .settings.after (newText ("oft"))
            .log ("final")
            .center()
            )
    ,
     newText ("errorWeiterA", "Bitte Sprache angeben")
        .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden (),
        newTextInput ("SpracheWeiterAIn")
        .settings.size (290,20)
        .settings.before (newText ("WeiterA", "Welche Sprache? &ensp;")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center())
        .log(),
        newTextInput ("SpracheWeiterBIn")
        .settings.size (290,20)
        .settings.before(newText ("WeiterB", "Weitere Sprache &ensp;")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center())
        .log(),
        newTextInput ("SpracheWeiterCIn")
        .settings.size (290,20)
        .settings.before (newText ("WeiterC", "Weitere Sprache &ensp;")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center())
        .log(),
        newTextInput ("SpracheWeiterDIn")
        .settings.size (290,20)
        .settings.before(newText ("WeiterD", "Weitere Sprache &ensp;")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center())
        .log(),
        newTextInput ("SpracheWeiterEIn")
        .settings.size (290,20)
        .settings.before (newText ("WeiterE", "Weitere Sprache &ensp;")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center())
        .log(),
     
        
        
    newCanvas ("WeitereSprachenCanvasA", 1000,120)
      .settings.add (150,20, getTextInput ("SpracheWeiterAIn"))
      .settings.add (150,50,getText ("HäufigkeitWeiterA"))
      .color ("white")
      .center()
      .print()
      ,
      newCanvas ("WeitereSprachenCanvasB", 1000,120)
      .settings.add (150,20, getTextInput ("SpracheWeiterBIn"))
      .settings.add (150,50,getText ("HäufigkeitWeiterB"))
      .color ("white")
      .center()
      .print()
      ,
     newCanvas ("WeitereSprachenCanvasC", 1000,120)
      .settings.add (150,20, getTextInput ("SpracheWeiterCIn"))
      .settings.add (150,50,getText ("HäufigkeitWeiterC"))
      .color ("white")
      .center()
      .print()
      ,
    newCanvas ("WeitereSprachenCanvasD", 1000,120)
      .settings.add (150,20, getTextInput ("SpracheWeiterDIn"))
      .settings.add (150,50,getText ("HäufigkeitWeiterD"))
      .color ("white")
      .center()
      .print()
      ,
    newCanvas ("WeitereSprachenCanvasE", 1000,150)
      .settings.add (150,20, getTextInput ("SpracheWeiterEIn"))
      .settings.add (150,50,getText ("HäufigkeitWeiterE"))
      .color ("white")
      .center()
      .print()
      ,
      newTextInput ("DialektIn")
      .size (290,20)
      .settings.before (newText ("Dialekt", "<b>Bist du mit einem Dialekt vertraut? &ensp; </b> </br> <small> Wenn ja, welcher?</small> &ensp; ").settings.css ("font-size", "18px"))
      .settings.after (newText ("errorDialekt", "<small> &ensp; Bitte ausfüllen</small>")
      .color ("red")
      .settings.hidden ())
      .center()
      .log()
      ,
     newTextInput ("EmailIn")
     .size (290,20)
     .settings.before ( newText("Email","<b>Dürfen wir dich in Zukunft erneut kontaktieren? &ensp; </b><br> <small>Wenn ja, bitte Emailadresse angeben. &ensp; ")
     .settings.css ("font-size", "18px")
     .center())
     .log()
     ,
     newText ("Freiwillig", "<p>Die Angabe der Kontaktdaten ist freiwillig. </br> Um Anonymität zu gewährleisten, wird diese Angabe getrennt vom ausgefüllten Fragebogen archiviert. </p> <p> Für die Aufwandsentschädigung kannst du deine Emailadresse an einer anderen Stelle eingeben. Hier geht es nur um zukünftige Studien. </p>")
     .center()
     .settings.css ("font-size", "14px")
 ,
     newCanvas ("DialektEmail", 1000, 230)
     .settings.add (150,0, getTextInput ("DialektIn"))
     .settings.add (150, 90, getTextInput ("EmailIn"))
     .settings.add (150, 120, getText ("Freiwillig"))
     .center()
     .print()
        ,
    newButton ("Weiter", "Weiter")
    .settings.css ("font-size", "16px"),
    newCanvas ("ButtonCanvas", 1000,80)
    .settings.add (350,0, getButton ("Weiter"))
    .color ("white")
    .center()
    .print()
    ,
    getButton ("Weiter")
    .wait(
        newFunction('dummy', ()=>true).test.is(true)
        .and(getDropDown ("WeitereSprachenDrop").test.selected ()
        .failure (getText ("errordrop").settings.visible()))
        .and (getTextInput ("DialektIn").test.text(/^.+/)
        .failure (getText ("errorDialekt").settings.visible()))
        ),
        getDropDown("WeitereSprachenDrop").wait("first")
     );   
 //Feedback-Fragebogen 
 
 PennController("Feedback",
    
    newImage("HU","HU-Logo.jpeg")  
             .size(90,90)
          ,
         newImage("RUEG","dfg_rueg_header.jpg")
             .size(294,90)
            , 
         newImage ("DFG", "DFG-logo.jpeg")
             .size (159,90)
         ,
          newCanvas("Logosnebeneinander",1138,140) //bildet den Header mit Logos
             .add(240,10, getImage("HU"))
             .add(380,10, getImage("RUEG"))
             .add(720,15, getImage("DFG"))
             .color ("white")
             .center()
             .print()
             ,   
         newText("Leerzeile"," <br></p>")
         .center()
         .print() 
 ,
 
        newText("getestet","<b>Was denkst du, was wir in diesem Online-Experiment untersuchen wollen?</b><br>Gib bitte ein Stichwort an.")
  //       .center()
         .print()
 ,
     newCanvas("getestet", 1, 10)
         .center()
         .print()
 ,
 newText ("errorgetestet", "&ensp;Bitte ausfüllen.")
 .color ("red")
 .settings.hidden(),
 
     newTextInput("getestet")
  //       .center()
         .size(500,80)
         .settings.after (getText ("errorgetestet"))
         .print()
 ,
     getTextInput("getestet")
         .log("final")
 ,
 newText("Leerzeile1"," <br></p>")
     .center()
     .print()
 ,
        newText("Sätze","<b>Ist dir etwas an den angehörten Sätzen aufgefallen?</b><br> Irgendeine Art von Auffälligkeit.")
  //       .center()
         .print()
 ,
     newCanvas("Sätze", 1, 10)
  //       .center()
         .print()
 ,
 newText ("errorSätze", "&ensp;Bitte ausfüllen.")
 .color ("red")
 .settings.hidden(),
 
     newTextInput("Sätze")
   //      .center()
         .size(500,80)
    .settings.after (getText ("errorSätze"))
         .print()
 ,
     getTextInput("Sätze")
         .log("final")
     ,
  newText("Leerzeile8"," <br></p>")
                  .center()
                 .print()
                  ,
       newText("Fragestellung","<b>Wir haben dich gebeten, die angehörten Sätze zu bewerten.</br> War dir die Aufgabenstellung klar?</b> Kommentiere bitte kurz.")
  //       .center()
         .print()
 ,
     newCanvas("Fragestellung", 1, 10)
  //       .center()
         .print()
 ,
 newText ("errorFragestellung", "&ensp;Bitte ausfüllen.")
 .color ("red")
 .settings.hidden(),
 
     newTextInput("Fragestellung")
   //      .center()
         .size(500,80)
    .settings.after (getText ("errorFragestellung"))
         .print()
 ,
     getTextInput("Fragestellung")
         .log("final")
     ,
  newText("Leerzeile9"," <br></p>")
                  .center()
                 .print()
                  ,
 
  newText("Setting","<b>Wie natürlich empfandest du das Setting der Studie?</b><br> Konntest du dir die Gesprächssituation gut vorstellen?")
 //        .center()
         .print()
 ,
     newCanvas("Setting", 1, 10)
  //       .center()
         .print()
 ,
 newText ("errorSetting", "&ensp;Bitte ausfüllen.")
 .color ("red")
 .settings.hidden(),
 
     newTextInput("Setting")
  //       .center()
  .size(500,80)
      .settings.after (getText ("errorSetting"))
         .print()
 ,
     getTextInput("Setting")
         .log("final")
 ,
 newText("Leerzeile4"," <br></p>")
                  .center()
                 .print()
                  ,
     newText("Technik","<b> Hattest du technische Schwierigkeiten beim Ablauf des Experiments?</b><br> Bitte kurz beschreiben.")
   //      .center()
         .print()
 ,
     newCanvas("Technik", 1, 10)
 //        .center()
         .print()
 ,
 newText ("errorTechnik", "Bitte ausfüllen.")
 .color ("red")
 .settings.hidden(),
 
  newTextInput("Technik")
 //        .center()
         .size(500,80)
         .settings.after (getText ("errorTechnik"))
         .print()
 ,
     getTextInput("Technik")
         .log("final")
                ,
                newText("Leerzeile2"," <br></p>")
                  .center()
                 .print()
                  ,
 newText("Sonstiges","<b>Ist dir noch etwas aufgefallen?</b><b> Jedes Feedback ist hilfreich.")
 //        .center()
         .print()
 ,
     newCanvas("Sonstiges", 1, 10)
  //       .center()
         .print()
 ,
 newText ("errorSonstiges", "Bitte ausfüllen.")
 .color ("red")
 .settings.hidden(),
 
     newTextInput("Sonstiges")
  //       .center()
         .size(500,80)
         .settings.after (getText ("errorSonstiges"))
         .print()
 ,
     getTextInput("Sonstiges")
         .log("final")
 ,
 newText("Leerzeile5"," <br></p>")
                  .center()
                 .print()
                  ,
     newButton("Ende", "Experiment beenden und Daten abschicken.")
                .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                //.settings.center()
                .log()
                .center()
   ,
   newCanvas ("ButtonCanvas", 1000,60)
   .center()
   .settings.add (300,0, getButton ("Ende"))
   .print()
   ,
   getButton ("Ende")
                .wait(
         newFunction('dummy', ()=>true).test.is(true)
        .and(getTextInput ("getestet").test.text(/^.+/)
        .failure (getText ("errorgetestet").settings.visible()))
        .and(getTextInput ("Sätze").test.text(/^.+/)
        .failure (getText ("errorSätze").settings.visible()))
        .and (getTextInput ("Setting").test.text(/^.+/)
        .failure (getText ("errorSetting").settings.visible()))
         .and (getTextInput ("Fragestellung").test.text(/^.+/)
        .failure (getText ("errorFragestellung").settings.visible()))
        ) 
        ); 

    //Email für Aufwandsentschädigung

        PennController ("Aufwand",
        newImage("HU","HU-Logo.jpeg")  
                  .size(90,90)
               ,
              newImage("RUEG","dfg_rueg_header.jpg")
                  .size(294,90)
                 , 
              newImage ("DFG", "DFG-logo.jpeg")
                  .size (159,90)
              ,
               newCanvas("Logosnebeneinander",1138,140) //bildet den Header mit Logos
                  .add(240,10, getImage("HU"))
                  .add(380,10, getImage("RUEG"))
                  .add(720,15, getImage("DFG"))
                  .color ("white")
                  .center()
                  .print()
                  ,   
              newText("Leerzeile"," <br></p>")
              .center()
              .print() 
      ,
      
             newText("Aufwand","Wenn du eine Aufwandsentschädigung erhalten möchtest, gib bitte deine Emailadresse an. Wir werden dich dann nur für die Abwicklung der Aufwandsentschädigung kontaktieren. </br> <br> </br> ")
           
              .print()
             ,
             newText ("Email", "<b>Emailadresse &ensp;</b>")
             .settings.after (newTextInput ("EmailIn").log())
           
             .print()
     ,
     newButton ("Weiter", "Weiter")
     .center()
     ,
     newCanvas ("Button", 1000,70) 
     .settings.add (450, 25, getButton ("Weiter"))
     .center()
     .print()
     ,
     
     getButton ("Weiter")
     .wait()
     
     ) ;     
       
//Geloggte Ergebnisse senden
PennController.SendResults("send");

PennController("Final",
         newText("<p align=center><b>Vielen Dank f&uuml;r deine Teilnahme!</b> </br> <br> Die Studie ist hiermit beendet.</br> <br> Du kannst das Fenster jetzt schließen. </br>  </p>")
            .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
            .settings.center()
            .print()
        ,
        newButton("void", "")
            .wait()


   );

