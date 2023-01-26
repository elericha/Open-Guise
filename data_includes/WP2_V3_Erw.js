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
                        "Studie",
                        "Ende",
                        "Meta1","Meta2","Feedback","send","Final");
PennController.DebugOff();
var progressBarText = "Fortschritt";

PennController.SetCounter("Counter","inc",1)

//WILLKOMMENSSEITE & INFOBLATT

PennController("Info",
        newImage("HU","HU-Logo.jpeg")  
            .size(140,140)
         ,
        newImage("RUEG","dfg_rueg_header.jpg")
            .size(392,120)
        ,newImage ("DFG", "DFG-logo.jpeg")
            .size (212,120)
        ,
         newCanvas("Logosnebeneinander",1138,140) //bildet den Header mit Logos
            .add(210,0, getImage("HU"))
            .add(370,15, getImage("RUEG"))
            .add(750,15, getImage("DFG"))
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
            .size(140,140)
         ,
        newImage("RUEG","dfg_rueg_header.jpg")
            .size(392,120)
        ,newImage ("DFG", "DFG-logo.jpeg")
            .size (212,120)
        ,
         newCanvas("Logosnebeneinander",1138,140) //bildet den Header mit Logos
            .add(210,0, getImage("HU"))
            .add(370,15, getImage("RUEG"))
            .add(750,15, getImage("DFG"))
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
            .size(140,140)
         ,
        newImage("RUEG","dfg_rueg_header.jpg")
            .size(392,120)
        ,newImage ("DFG", "DFG-logo.jpeg")
            .size (212,120)
        ,
         newCanvas("Logosnebeneinander",1138,140) //bildet den Header mit Logos
            .add(210,0, getImage("HU"))
            .add(370,15, getImage("RUEG"))
            .add(750,15, getImage("DFG"))
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

            newText("StartProbe","<p align=center><br>Im Folgenden stellen wir dir eine Situation vor. Du wirst ein <b>Bild sehen</b> und eine kurze <b>Beschreibung der Situation lesen.</b> </br> <br> Danach wirst du <b>weitere Bilder sehen </b> und <b>Sätze anhören.</b> </br> <br>Die Aufgabe in den nächsten Minuten besteht darin, diese <b> Sätze zu bewerten.</b> Dazu kannst du eine <b>Skala anklicken.</b></br> </p>")
              .settings.css("font-family", "calibri").settings.css("font-size", "20px")
               .center()
        ,
        newCanvas(620,200)
            .add(20, 0, getText("StartProbe"))
            .center()
            .print()
          ,
            newText("Leerzeile"," <br></p>")
                   .center()
                 .print()
                  
     ,
        newButton("Weiter", "Weiter")
         .settings.css("font-family", "calibri").settings.css("font-size", "18px")
         .center()
            .print()
            .wait()
        
        );
// Einleitung der Gesprächssituation mit Bild 
newText ("Heading-Start",  "<p><b>Anleitung</b></p>")
   .settings.css ("font-size", "22px")
   .center()
   ,

           newText("StartProbe","<p><br>Im Folgenden stellen wir dir eine Situation vor. </br> <br> Du wirst ein <b>Bild sehen</b> und eine kurze <b>Beschreibung der Situation lesen.</b> </br> <br> Danach wirst du <b>weitere Bilder sehen </b> und <b>Sätze anhören.</b> </br> <br>Die Aufgabe in den nächsten Minuten besteht darin, diese <b> Sätze zu bewerten.</b> </br> Dazu kannst du eine <b>Skala anklicken.</b></br> </p>")
             .settings.css("font-family", "calibri").settings.css("font-size", "20px")
              .center()
       ,
          newButton("Weiter", "Weiter")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
        .center()
        ,
       newCanvas(1000,300)
       .settings.add (250,0,getText ("Heading-Start"))
       .settings.add(250, 30, getText("StartProbe"))
       .settings.add (250,280, getButton ("Weiter"))
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
           newText("Einleitung","<p> <br> <b> Stell Dir folgende Situation vor: </b> </br> <br> Zwei Freundinnen haben sich lange nicht mehr gesehen und treffen sich in einem Café. Sie trinken gemeinsam einen Kaffee und unterhalten sich dabei. </br> <br> Die eine Freundin war gerade im Urlaub und erzählt der anderen, was sie dort erlebt hat. </br> <br> Ab und zu zeigt sie der Freundin Fotos vom Urlaub auf ihrem Handy, um ihre Geschichte zu veranschaulichen. </br> </p>")
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
       newText("Beispiel","<br> Hier siehst du die Bilder, die sie gemacht hat. Gleich hörst du dazu einige Sätze der Unterhaltung. </br> <br> Deine Aufgabe besteht darin, diese Sätze zu bewerten.</br> <br> Zu jedem Bild werden mehrere Sätze abgespielt. Nach jedem Satz wollen wir wissen:</br> <br> <b>Wie natürlich empfindest Du den Satz? </b> </br><br>Jetzt gibt es einen Probedurchlauf mit den Audiodateien. </br></p>")
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
           .add (350,480, getButton ("Weiter"))
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
       newText("Bewertung","<p><br><b>Schritt 2:</b> Bitte den angehörten Satz bewerten.</br> <b> <br> Wie natürlich empfindest du den Satz? </b> </br> <br> Bitte auf der Skala einen Wert anklicken. </br> <br> </br> </p>")
             .settings.css("font-family", "calibri").settings.css("font-size", "18px")
              .center()
       ,
        newScale("Skala1", 7)
        .settings.css("font-family", "calibri").settings.css("font-size", "20px")
         .settings.labelsPosition("bottom").color("white")
             
       .settings.before(newText("labelleft","<em>vollkommen</br>natürlich"))
       .settings.after(newText("labelright","<em>vollkommen</br> unnatürlich</em>"))
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
           .add( 0, 0, getImage("Image"))
           .add (350,0, getText ("counter"))
           .add( 350, 50, getAudio("Audio"))
           .add (350,100, getText ("Bewertung"))
           .add (350,330, getScale ("Skala1"))
           .add (350,420, getButton ("Weiter"))
           .print()
       ,
   getButton("Weiter").wait(
      getScale("Skala1").test.selected()
             .failure( newText('errorage', "<br>Bitte Punkt auf der Skala wählen.").color("red") .center().print() )
              .and(
             getAudio("Audio").test.hasPlayed()
                 .failure( newText('errorplay', "<br>Bitte höre dir die Audiodatei an, bevor du sie bewertest.")
                 .color("red") 
                 .center()
                 .print() )))
                 
               
       
       )
       .log ("Audio", row.Audio)
       .log ("item", row.item)
       ); 

PennController ("Los",

       newText ("Probe","<br> </br> <p> <b>Sehr gut! Dann geht es jetzt los.</b> </br> <br> Klicke auf &quot;Start&quot;, um zu beginnen. </br></p>")
       .settings.css("font-family", "calibri").settings.css("font-size", "20px")
       .settings.center()
       .print()
       ,
       newButton("Weiter", "Start")
        .settings.css("font-family", "calibri").settings.css("font-size", "18px")
       .settings.center()
           .print()
            .wait()
       );
        
       PennController ("EinleitungStudie",

       newText ("Heading-Einleitung",  "<p><b>Gesprächssituation</b></p>")
       .settings.css ("font-size", "22px")
       .center()
       ,
       newImage("Einleitungsbild","Einleitung_Freundinnen-web.jpg") 
                   .size(600,400)
                   .center()
       ,
               newText("Einleitung","<p> <br> <b> Stell Dir folgende Situation vor: </b> </br> <br> Zwei Freundinnen haben sich lange nicht mehr gesehen und treffen sich in einem Café. Sie trinken gemeinsam einen Kaffee und unterhalten sich dabei. </br> <br> Die eine Freundin war gerade im Urlaub und erzählt der anderen, was sie dort erlebt hat. </br> <br> Ab und zu zeigt sie der Freundin Fotos vom Urlaub auf ihrem Handy, um ihre Geschichte zu veranschaulichen. </br> </p>")
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
           newText("Bewertung","<p><br>Bitte den angehörten Satz bewerten.</br> <b> <br> Wie natürlich empfindest du den Satz? </b> </br> <br> Bitte auf der Skala einen Wert anklicken.</br> <br> </br> </p>")
                 .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                  .center()
           ,
            newScale("Skala1", 7)
            .settings.css("font-family", "calibri").settings.css("font-size", "20px")
             .settings.labelsPosition("bottom").color("white")
                 
           .settings.before(newText("labelleft","<em>vollkommen</br>natürlich"))
           .settings.after(newText("labelright","<em>vollkommen</br> unnatürlich</em>"))
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
               .add( 0, 0, getImage("Image"))
               .add (350,0, getText ("counter"))
               .add( 350, 50, getAudio("Audio"))
               .add (350,100, getText ("Bewertung"))
               .add (350,300, getScale ("Skala1"))
               .add (350,420, getButton ("Weiter"))
               .print()
           ,
       getButton("Weiter").wait(
          getScale("Skala1").test.selected()
                 .failure( newText('errorage', "<br>Bitte Punkt auf der Skala wählen.").color("red") .center().print() )
                  .and(
                 getAudio("Audio").test.hasPlayed()
                     .failure( newText('errorplay', "<br>Bitte höre dir die Audiodatei an, bevor du sie bewertest.")
                     .color("red") 
                     .center()
                     .print() )))
                     
                   
           
           )
           .log ("Audio", row.Audio)
           .log ("Group", row.Group)
           .log ("item", row.item)
           ); 
   
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
           newText("Bewertung","<p><br>Bitte den angehörten Satz bewerten.</br> <b> <br> Wie natürlich empfindest du den Satz? </b> </br> <br> Bitte auf der Skala einen Wert anklicken.</br></p>")
                 .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                  .center()
           ,
              newScale("Skala1", 7)
               .settings.css("font-family", "calibri").settings.css("font-size", "20px")
               .settings.labelsPosition("bottom").color("white")
               .settings.before(newText("labelleft","<em>vollkommen natürlich"))
               .settings.after(newText("<em>vollkommen unnatürlich</em>"))
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
           newCanvas ("Durchlauf2", 1500,500)
               .add( 0, 0, getImage("Image"))
               .add (350,0, getText ("counter"))
               .add( 350, 50, getAudio("Audio"))
               .add (350,100, getText ("Bewertung"))
               .add (350,300, getScale ("Skala1"))
               .add (350,420, getButton ("Weiter"))
               .print()
           ,
       getButton("Weiter").wait(
          getScale("Skala1").test.selected()
                 .failure( newText('errorage', "<br>Bitte Punkt auf der Skala wählen.").color("red") .center().print() )
                  .and(
                 getAudio("Audio").test.hasPlayed()
                     .failure( newText('errorplay', "<br>Bitte höre dir die Audiodatei an, bevor du sie bewertest.")
                     .color("red") 
                     .center()
                     .print() )))
                     
                   
           
           )
           .log ("Audio", row.Audio)
           .log ("Group", row.Group)
           .log ("item", row.item)
           );
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
           newText("Bewertung","<p><br>Bitte den angehörten Satz bewerten.</br> <b> <br> Wie natürlich empfindest du den Satz? </b> </br> <br> Bitte auf der Skala einen Wert anklicken.</br> <br> </br> </p>")
                 .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                  .center()
           ,
            newScale("Skala1", 7)
            .settings.css("font-family", "calibri").settings.css("font-size", "20px")
             .settings.labelsPosition("bottom").color("white")
                 
           .settings.before(newText("labelleft","<em>vollkommen</br>natürlich"))
           .settings.after(newText("labelright","<em>vollkommen</br> unnatürlich</em>"))
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
           newCanvas ("Durchlauf3", 1500,500)
               .add( 0, 0, getImage("Image"))
               .add (350,0, getText ("counter"))
               .add( 350, 50, getAudio("Audio"))
               .add (350,100, getText ("Bewertung"))
               .add (350,300, getScale ("Skala1"))
               .add (350,420, getButton ("Weiter"))
               .print()
           ,
       getButton("Weiter").wait(
          getScale("Skala1").test.selected()
                 .failure( newText('errorage', "<br>Bitte Punkt auf der Skala wählen.").color("red") .center().print() )
                  .and(
                 getAudio("Audio").test.hasPlayed()
                     .failure( newText('errorplay', "<br>Bitte höre dir die Audiodatei an, bevor du sie bewertest.")
                     .color("red") 
                     .center()
                     .print() )))
                     
                   
           
           )
           .log ("Audio", row.Audio)
           .log ("Group", row.Group)
           .log ("item", row.item)
           ); 
   PennController ("Ende",
       
       newText ("Danke", "<p align=center > <br> <b>Vielen Dank!</b></br></p> <p><br> Jetzt bitten wir Dich, einen Fragebogen auszufüllen, der uns bei der Auswertung unserer Studie helfen hilft. </br> <br> Hier fragen wir Dich nach einigen persönlichen Angaben (z.B. Alter, Ausbildung) sowie Informationen zu Deinen Sprachkenntnissen und Deinem persönlichen Sprachgebrauch.</br> <br> </br> </p>" )
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

 //Metadaten
    //Personenbezogene Daten Seite 1 - Alter, Geschlecht, Bildung, Sozialerstatus
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
        newText("Alter", "Wie alt bist du?")
            .settings.css("font-size", "18px")
            .settings.bold()
            .center()
            .print()
        ,
        newTextInput("AlterIn")
        .log(),
    
        newText("Geschlechtsidentität", "Welcher Geschlechtsidentität fühlst du dich zugehörig?")
            .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newDropDown("IdentityDrop", "Bitte wähle eine Option aus")
            .settings.add("Divers", "Weiblich", "Männlich")
            .settings.size (340,20)
            .log(),
        newText("Wohnort", "Aktueller Wohnort")
            .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newText("SeitWohnort","Seit welchem Lebensalter wohnst du hier?")
            .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newTextInput("WohnortIn").log(), 
        newTextInput("SeitWohnortIn").log(), 
        newText("Geburtsort", "Geburtsort")
            .settings.css("font-size", "18px")
            .settings.bold(),
        newTextInput ("GeburtIn").log(),
        newText("AndereOrte", "<br>Falls zutreffend, gib bitte vorherige Wohnorte an. Welche Lebensjahre hast du dort verbracht? </br>")
            .settings.css("font-size", "18px")
            .settings.bold()
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
        newText ("VonA", "<b>Alter Anfang </b> </br> <small>z.B. 5 </small>")
        .settings.css("font-size", "18px")
            .center(),
        newText ("BisA", "<b>Alter Ende</b> </br> <small> z.B. 12 </small>")
        .settings.css("font-size", "18px")
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
        newText ("Bildung", "Höchster Bildungsabschluss")
        .settings.css("font-size", "18px")
            .settings.bold()
            .center(),
        newDropDown("BildungDrop", "Bitte eine Option ausw&auml;hlen")
        .settings.add("kein Abschluss","Schulabschluss","Abitur oder gleichwertiger Abschluss","Ausbildung","Studium ohne Abschluss","Bachelor","Master","Magister","Diplom", "Promotion", "Sonstige")
        .settings.size (340,20)
        .log(),
        newText ("Studium", "<b>Studierst du?</b> <small> Falls ja, welches Fach und welches Semester? </small>")
        .settings.css ("font-size", "18px")
        .center(),
        newTextInput ("StudiumIn")
        .settings.size (220,20)
        .settings.hidden ()
        ,
        newDropDown ("StudiumDrop","ausw&auml;hlen")
        .settings.add ("Ja", "Nein")
        .settings.callback(
                       getDropDown("StudiumDrop")
                       .test.selected("Ja")
                       .success(getTextInput("StudiumIn").settings.visible())),
        newText ("errorAlter", "Bitte gib dein Alter an.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ,
        newText ("errorIdentity", "Bitte gib eine Geschlechtsidentität an.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ,
        newText ("errorWohnort", "Bitte gib deinen Wohnort an.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ,
        newText ("errorSeitWann", "Bitte gib an, seit welchem Alter du hier wohnst.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ,
        newText ("errorGeburt", "Bitte gib deinen Geburtsort an.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ,
        newText ("errorBildung", "Bitte gib deinen höchsten Bildungsabschluss an.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ,
        newText ("errorStudium", "Bitte gib an, ob du studierst.")
       .settings.css ("font-size", "14px")
       .color ("red")
       .settings.hidden ()
       ,
        newCanvas("Fragen1",1000,600)
            .settings.add(150,0, getText("Alter"))
            .settings.add(600,0, getTextInput("AlterIn"))
            .settings.add (150,20, getText ("errorAlter"))
            .settings.add(150,50, getText("Geschlechtsidentität"))
            .settings.add(600,50, getDropDown("IdentityDrop"))
            .settings.add (150,70, getText ("errorIdentity"))
            .settings.add(150,100, getText("Wohnort"))
            .settings.add(600,100, getTextInput("WohnortIn"))
            .settings.add (300,103, getText ("errorWohnort"))
            .settings.add(150,130, getText("SeitWohnort"))
            .settings.add (600,130, getTextInput ("SeitWohnortIn")) 
            .settings.add(150,150, getText ("errorSeitWann"))
            .settings.add(150,180, getText ("Geburtsort"))
            .settings.add(600,180, getTextInput ("GeburtIn"))
            .settings.add (150,200, getText ("errorGeburt"))
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
            .settings.add(150,520, getText ("Bildung"))
            .settings.add(600,520, getDropDown ("BildungDrop"))
            .settings.add(150,540, getText ("errorBildung"))
            .settings.add(150,560, getText ("Studium"))
            .settings.add(600,560, getDropDown ("StudiumDrop"))
            .settings.add(720,560, getTextInput ("StudiumIn"))
            .settings.add(150,580, getText ("errorStudium"))
           
        .center()
        .print()
        ,
        
        newButton ("Weiter", "Weiter")
        .center()
       ,
       newCanvas ("ButtonCanvas",1000,40)
       .settings.add (420,20, getButton ("Weiter"))
       .print()
       ,
       getButton ("Weiter")
       .wait(
                newFunction('dummy', ()=>true).test.is(true)
                .and( getDropDown("BildungDrop").test.selected()
                .failure (getText ("errorBildung").settings.visible()))
                .and( getDropDown("IdentityDrop").test.selected()
                .failure (getText ("errorIdentity").settings.visible()))
                .and( getTextInput("AlterIn").test.text(/^.+/)
                .failure (getText ("errorAlter").settings.visible())) 
                .and( getTextInput("WohnortIn").test.text(/^.+/)
                .failure (getText ("errorWohnort").settings.visible())) 
                .and( getTextInput("SeitWohnortIn").test.text(/^.+/)
                .failure (getText ("errorSeitWann").settings.visible())) 
                .and( getTextInput("GeburtIn").test.text(/^.+/)
                .failure (getText ("errorGeburt").settings.visible())) 
                .and( getDropDown("StudiumDrop").test.selected()
                .failure (getText ("errorStudium").settings.visible())) 
                )
        ,
                    getDropDown("IdentityDrop").wait("first")
                   ,
                   getDropDown("BildungDrop").wait("first")
                   ,
                    getDropDown("StudiumDrop").wait("first")             
                   
                ); 
    
 //Metadaten 2: Sprachbiographie
PennController("Meta2",
    newImage("HU","HU Logo.png")  
            .size(289,65)
         ,
        newImage("RUEG","dfb-")
            .size(230,60)
        ,
         newCanvas("Logosnebeneinander",1138,100) //bildet den Header mit Logos
            .add(100,0, getImage("HU"))
            .add(450,0, getImage("RUEG"))
            .center()
            .print()
        ,

       newText("SprachenMutter","<b>Welche Sprachen spricht/sprach Ihre Mutter?</b><br>Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
 //       .center()
        .print()
,
    newCanvas("SprachenMutter", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenMutter")
 //       .center()
        .size(600,80)
        .print()
,
    getTextInput("SprachenMutter")
        .log("final")
,
newText("Leerzeile"," <br></p>")
    .center()
    .print()
,
    newText("SprachenVater","<b>Welche Sprachen spricht/sprach Ihr Vater?</b><br> Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
  //      .center()
        .print()
,
    newCanvas("SprachenVater", 1, 10)
//        .center()
        .print()
,
    newTextInput("SprachenVater")
//        .center()
        .size(600,80)
        .print()
,
    getTextInput("SprachenVater")
        .log("final")
               ,
               newText("Leerzeile"," <br></p>")
                 .center()
                .print()
                 ,
       newText("SprachenSelbst","<b>Welche Sprachen sprechen Sie selbst im Alltag?</b><br> Mit wem und in welchen Situationen? Bitte sortieren und mit der am häufigsten gesprochenen Sprache beginnen.")
 //       .center()
        .print()
,
    newCanvas("SprachenSelbst", 1, 10)
 //       .center()
        .print()
,
    newTextInput("SprachenSelbst")
  //      .center()
        .size(600,80)
        .print()
,
    getTextInput("SprachenSelbst")
        .log("final")
    ,
 newText("Leerzeile"," <br></p>")
                 .center()
                .print()
                 ,

 newText("Dialekt","<b>Sprechen Sie einen Dialekt?</b><br> Mit wem und in welchen Situationen?")
//        .center()
        .print()
,
    newCanvas("Dialekt", 1, 10)
 //       .center()
        .print()
,

    newTextInput("Dialekt")
 //       .center()
 .size(600,80)
        .print()
,
    getTextInput("Dialekt")
        .log("final")
,
newText("Leerzeile"," <br></p>")
                 .center()
                .print()
                 ,
newText("Email","<b>Dürften wir dich in Zukunft erneut kontaktieren?</b><br>Wenn ja, bitte Emailadresse angeben.<br>Die Angabe der Kontaktdaten ist freiwillig. Um Anonymität zu gewährleisten, wird diese Angabe getrennt vom ausgefüllten Fragebogen archiviert.")
//        .center()
        .print()
,
    newCanvas("Email", 1, 10)
 //       .center()
        .print()
,

    newTextInput("Email")
 //       .center()
        .size(600,80)
        .print()
,
    getTextInput("Email")
        .log("final")
,
newText("Leerzeile"," <br></p>")
                 .center()
                .print()
                 ,
    newButton("Ende", "Experiment beenden und Daten abschicken")
               .settings.css("font-family", "calibri").settings.css("font-size", "18px")
               //.settings.center()
               .log()
               .center()
               .print()
               .wait(
            newFunction('dummy', ()=>true).test.is(true)
                .and(
             getTextInput("SprachenMutter").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errormutter","<br>Bitte Sprachen der Mutter angeben")
                   .settings.color("red")
                   .center()
                   .print())
                ).and(
             getTextInput("SprachenVater").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errorvater","<br>Bitte Sprachen des Vaters angeben.")
                   .settings.color("red")
                   .center()
                   .print())
             ).and(
             getTextInput("SprachenSelbst").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errorselbst","<br>Bitte angeben welche Sprachen Sie im Alltag sprechen.")
                   .settings.color("red")
                   .center()
                   .print())
            ).and(
             getTextInput("Dialekt").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errordialekt","<br>Bitte Dialekt angeben.")
                   .settings.color("red")
                   .center()
                   .print())
            )  

 )
)
//Feedback-Fragebogen 
PennController("Feedback",
   newImage("HU","HU-Logo.jpeg")  
            .size(90,90)
         ,
        newImage("RUEG","dfg_rueg_header.jpg")
            .size(294,90)
        ,newImage ("DFG", "DFG-logo.jpeg")
            .size (159,90)
        ,
         newCanvas("Logosnebeneinander",1138,140) //bildet den Header mit Logos
            .add(240,10, getImage("HU"))
            .add(380,10, getImage("RUEG"))
            .add(720,15, getImage("DFG"))
            .center()
            .print()
            ,   
        newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
       newText("getestet","<b>Was denkst Du, was wir in diesem Online-Experiment untersuchen wollen?</b><br>Es gibt keine falschen Antworten. Gib gerne ein Stichwort an.")
 //       .center()
        .print()
,
    newCanvas("getestet", 1, 10)
        .center()
        .print()
,
    newTextInput("getestet")
 //       .center()
        .size(600,80)
        .print()
,
    getTextInput("getestet")
        .log("final")
,
newText("Leerzeile1"," <br></p>")
    .center()
    .print()
,
    newText("Technik","<b> Hattest Du technische Schwierigkeiten beim Ablauf des Experiments?</b><br> Bitte kurz beschreiben.")
  //      .center()
        .print()
,
    newCanvas("Technik", 1, 10)
//        .center()
        .print()
,
    newTextInput("Technik")
//        .center()
        .size(600,80)
        .print()
,
    getTextInput("Technik")
        .log("final")
               ,
               newText("Leerzeile2"," <br></p>")
                 .center()
                .print()
                 ,
       newText("Sätze","<b>Ist Dir etwas an den angehörten Sätzen aufgefallen?</b><br> Irgendeine Art von Auffälligkeit.")
 //       .center()
        .print()
,
    newCanvas("Sätze", 1, 10)
 //       .center()
        .print()
,
    newTextInput("Sätze")
  //      .center()
        .size(600,80)
        .print()
,
    getTextInput("Sätze")
        .log("final")
    ,
 newText("Leerzeile3"," <br></p>")
                 .center()
                .print()
                 ,

 newText("Setting","<b>Wie natürlich empfandest Du das Setting der Studie?</b><br> Konntest Du Dir die Gesprächssituation gut vorstellen?")
//        .center()
        .print()
,
    newCanvas("Setting", 1, 10)
 //       .center()
        .print()
,

    newTextInput("Setting")
 //       .center()
 .size(600,80)
        .print()
,
    getTextInput("Setting")
        .log("final")
,
newText("Leerzeile4"," <br></p>")
                 .center()
                .print()
                 ,
newText("Sonstiges","<b>Ist Dir noch etwas aufgefallen?</b><b> Jedes Feedback ist hilfreich.")
//        .center()
        .print()
,
    newCanvas("Sonstiges", 1, 10)
 //       .center()
        .print()
,

    newTextInput("Sonstiges")
 //       .center()
        .size(600,80)
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
               .print()
               .wait()
 )
;
//Geloggte Ergebnisse senden
PennController.SendResults("send");

//Abschlussbildschirm
PennController("Final",
         newText("<p align=center><b>Vielen Dank f&uuml;r deine Teilnahme!</b> </br> <br> Die Studie ist hiermit beendet.</br> <br> Du kannst das Fenster jetzt schließen. </br> </p>")
            .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
            .settings.center()
            .print()
        ,
        newButton("void", "")
            .wait()


   );
;


