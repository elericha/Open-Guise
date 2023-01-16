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
                        "Probedurchlauf2",
                        "Probedurchlauf3",
                        "Einleitung2",
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
PennController ("Einleitung",

    newText ("Heading-Einleitung",  "<p><b>Gesprächssituation</b></p>")
    .settings.css ("font-size", "22px")
    .center()
    .print()
    ,

        newImage("Einleitung","Einleitung_Freundinnen-web.jpg") 
                .size(600,400)
                .center()
                .print()
                
        ,
            newText("Einleitung","<p align=center><br>Zwei Freundinnen sitzen gemeinsam in einem Café und unterhalten sich.</br> <br> Die eine war gerade im Urlaub und erzählt, was sie dort erlebt hat.</br> <br> Sie zeigt der Freundin Fotos vom Urlaub auf ihrem Handy.</br> </p>")
              .settings.css("font-family", "calibri").settings.css("font-size", "20px")
               .center()
        ,
        newCanvas(620,180)
            .add(20, 0, getText("Einleitung"))
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
        
        )
// Beispiel Urlaubsbild (ohne Audio)
PennController ("Beispiel",
    
    newImage ("Kuh", "Bild2-Kuh.jpg")
    .size (400,600)
    .center()
    .print()
    ,
            newText("Beispiel","<p align=center> <br> Hier siehst du die Bilder, die sie gemacht hat. Gleich hörst du dazu einige Sätze der Unterhaltung. </br> <br> Deine Aufgabe besteht darin, diese Sätze zu bewerten.</br> <br> Zu jedem Bild werden mehrere Sätze abgespielt. Nach jedem Satz wollen wir wissen:</br> <br> <b>Wie natürlich empfindest Du den Satz? </b> </br><br>Jetzt gibt es einen Probedurchlauf mit den Audiodateien. </br></p>")
              .settings.css("font-family", "calibri").settings.css("font-size", "20px")
               .center()
        ,
        newCanvas(620,300)
            .add(20, 0, getText("Beispiel"))
            .center()
            .print()
          ,
    newText("LeerzeileB"," <br></p>")
        .center()
        .print()
                  
     ,
    newButton("Weiter", "Weiter")
         .settings.css("font-family", "calibri").settings.css("font-size", "18px")
         .center()
            .print()
            .wait()
        
        );
//Probedurchlauf Kuh
PennController ("Probedurchlauf",
        newAudio("KuhAudio", "21_Kuh1_ja.wav" ) //hier sind die Audios pro Seite einzeln eingefügt
                .center()
                .once()
            ,
        newImage("Kuhbild","Bild2-Kuh.jpg") //auch die Bilder müssen einzeln benannt und im Code erwähnt sein
                .center()
                .size(400,600)
    
            ,
        newCanvas ("Durchlauf", 600,650)
            .add(   100, 0, getImage("Kuhbild"))
            .add( 150, 620, getAudio("KuhAudio"))
            .print()
        ,
            newText("Bewertung","<p><br>1. Klicke auf den Play-Button, um die Audiodatei anzuhören. </br> <br>2. Bitte den angehörten Satz bewerten. Wie natürlich empfindest du den Satz?</b>  Bitte auf der Skala einen Wert anklicken.</br> <br>3. Sobald ein Wert auf der Skala ausgewählt wurde, erscheint ein Button am Ende der Seite. </br> </p>")
              .settings.css("font-family", "calibri").settings.css("font-size", "20px")
               .center()
        ,
        newCanvas(550,200)
            .add(0, 0, getText("Bewertung"))
            .center()
            .print()
          ,
            newText("Leerzeile"," <br></p>")
                   .center()
                 .print()
                  ,
        newScale("Skala1", 7)
            .settings.css("font-family", "calibri").settings.css("font-size", "22px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before(newText("<b>vollkommen natürlich</b>&ensp;"))
            .settings.after(newText("&ensp;<b>vollkommen unnatürlich</b>"))
            .log ("all")
            .center()
            .print()
            .wait()
        ,
        newText ("Probe","<b>Sehr gut! Klicke auf &quotWeiter&quot, um zur nächsten Seite zu kommen.</b> </br></p>")
        .settings.css("font-family", "calibri").settings.css("font-size", "20px")
        .settings.center()
        .print()
        ,
        newButton("Weiter", "Weiter")
         .settings.css("font-family", "calibri").settings.css("font-size", "18px")
        .settings.center()
            .print()
             .wait(getAudio("KuhAudio").test.hasPlayed()
                  .failure( newText('errorplay', "<br>Bitte höre dir die Audiodatei an, bevor du sie bewertest.").color("red") .center().print() ))
        
        );
PennController ("Probedurchlauf2",
        newAudio("KuhAudio2", "6_Kuh2_ja.wav" ) 
                .center()
            ,
        newImage("Kuhbild","Bild2-Kuh.jpg") 
                .center()
                .size(400,600)
    
            ,
        newCanvas ("Durchlauf2", 600,650)
            .add(   100, 0, getImage("Kuhbild"))
            .add( 150, 620, getAudio("KuhAudio2"))
            .print()
        ,
        newText("Bewertung","<p align=center><br>Bitte den angehörten Satz bewerten. <b> </br> <br> Wie natürlich empfindest du den Satz? </b> </br> Bitte auf der Skala einen Wert anklicken.</br>")
              .settings.css("font-family", "calibri").settings.css("font-size", "20px")
               .center()
               ,
        newCanvas(550,200)
            .add(110, 15, getText("Bewertung"))
            .center()
            .print()
                  ,
        newScale("Skala1", 7)
            .settings.css("font-family", "calibri").settings.css("font-size", "22px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before(newText("<b>vollkommen natürlich</b>&ensp;"))
            .settings.after(newText("&ensp;<b>vollkommen unnatürlich</b>"))
            .log ("all")
            .center()
            .print()
            .wait()
        ,
        newText ("Probe","<b>Sehr gut! Klicke auf &quotWeiter&quot, um zur nächsten Seite zu kommen.</b> </br></p>")
        .settings.css("font-family", "calibri").settings.css("font-size", "20px")
        .settings.center()
        .print()
        ,
        newButton("Weiter", "Weiter")
         .settings.css("font-family", "calibri").settings.css("font-size", "18px")
        .settings.center()
            .print()
             .wait(getAudio("KuhAudio2").test.hasPlayed()
                  .failure( newText('errorplay', "<br>Bitte höre dir die Audiodatei an, bevor du sie bewertest.").color("red") .center().print() ))
        
        );
        
 PennController ("Probedurchlauf3",
        newAudio("KuhAudio3", "23_Kuh3_ja.wav" ) 
                .center()
            ,
        newImage("Kuhbild","Bild2-Kuh.jpg") 
                .center()
                .size(400,600)
    
            ,
        newCanvas ("Durchlauf3", 600,650)
            .add(   100, 0, getImage("Kuhbild"))
            .add( 150, 620, getAudio("KuhAudio3"))
            .print()
        ,
        newText("Bewertung","<p align=center><br>Bitte den angehörten Satz bewerten. <b> </br> <br> Wie natürlich empfindest du den Satz? </b> </br> Bitte auf der Skala einen Wert anklicken.</br>")
              .settings.css("font-family", "calibri").settings.css("font-size", "20px")
               .center()
               ,
        newCanvas(550,200)
            .add(110, 15, getText("Bewertung"))
            .center()
            .print()
                  ,
        newScale("Skala1", 7)
            .settings.css("font-family", "calibri").settings.css("font-size", "22px")
            .settings.labelsPosition("bottom").color("white")
            .settings.before(newText("<b>vollkommen natürlich</b>&ensp;"))
            .settings.after(newText("&ensp;<b>vollkommen unnatürlich</b>"))
            .log ("all")
            .center()
            .print()
            .wait()
        ,
        newText ("Probe","<b>Sehr gut! Dann geht es jetzt los.</b> </br></p>")
        .settings.css("font-family", "calibri").settings.css("font-size", "20px")
        .settings.center()
        .print()
        ,
        newButton("Weiter", "Weiter")
         .settings.css("font-family", "calibri").settings.css("font-size", "18px")
        .settings.center()
            .print()
             .wait(getAudio("KuhAudio3").test.hasPlayed()
                  .failure( newText('errorplay', "<br>Bitte höre dir die Audiodatei an, bevor du sie bewertest.").color("red") .center().print() ))
        
        );

        
        // Now create the Item trials reading the audio references from audios
        
        PennController ("Einleitung2",
        
            newText ("Heading-Einleitung",  "<p><b>Gesprächssituation</b></p>")
            .settings.css ("font-size", "22px")
            .center()
            .print()
            ,
        
                newImage("Einleitung","Einleitung_Freundinnen-web.jpg") 
                        .size(600,400)
                        .center()
                        .print()
                        
                ,
                    newText("Einleitung","<p align=center><br>Zwei Freundinnen sitzen gemeinsam in einem Café und unterhalten sich.</br> <br> Die eine war gerade im Urlaub und erzählt, was sie dort erlebt hat.</br> <br> Sie zeigt der Freundin Fotos vom Urlaub auf ihrem Handy.</br> </p>")
                      .settings.css("font-family", "calibri").settings.css("font-size", "20px")
                       .center()
                ,
                newCanvas(620,180)
                    .add(20, 0, getText("Einleitung"))
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
                
                )
        
    Template ("OG-audios.csv", row =>
        
        PennController ("Studie",
        
                newText ("counter", row.Anzahl)
                .settings.css ("font-size", "18px")
                .settings.css("")
                .center()
                .print()
                ,
                newAudio("Audio",row.Audio ) //nimmt sich aus der OG-audios Tabelle immer das nächste Audio 
                       .center()
                  ,
               newImage("Image",row.Image) //nimmt sich aus der OG-audios Tabelle immer das nächste Bild 
                       .center()
                       .size(400,600)
            
                  ,
                newCanvas ("Durchlauf", 600,650)
                    .add(   100, 0, getImage("Image"))
                    .add( 150, 620, getAudio("Audio"))
                    .print()
                ,
                    newText("Bewertung","<p align=center><br>Bitte den angehörten Satz bewerten. <b> </br> <br> Wie natürlich empfindest du den Satz? </b> </br> Bitte auf der Skala einen Wert anklicken.</br>")
                      .settings.css("font-family", "calibri").settings.css("font-size", "20px")
                       .center()
                ,
                newCanvas(550,200)
                    .add(110, 15, getText("Bewertung"))
                    .center()
                    .print()
                          ,
                newScale("Skala1", 7)
                    .settings.css("font-family", "calibri").settings.css("font-size", "22px")
                    .settings.labelsPosition("bottom").color("white")
                    .settings.before(newText("<b>vollkommen natürlich</b>&ensp;"))
                    .settings.after(newText("&ensp;<b>vollkommen unnatürlich</b>"))
                    .log ("all")
                    .center()
                    .print()
                    .wait()
                ,
                newText ("Probe","<b>Klicke erst auf &quotWeiter&quot, wenn die Audiodatei fertig abgespielt wurde.</b> </br></p>")
                .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                .settings.center()
                .print()
                ,
                newButton("Weiter", "Weiter")
                 .settings.css("font-family", "calibri").settings.css("font-size", "18px")
                .settings.center()
                    .print()
                     .wait(getAudio("Audio").test.hasPlayed()
                          .failure( newText('errorplay', "<br>Bitte höre dir die Audiodatei an, bevor du sie bewertest.").color("red") .center().print() ))
                        
                
                )
                .log ("Audio", row.Audio)
                .log ("Group", row.Group)
                .log ("item", row.item)
                );

//Ende des Hauptteils + Überleitung zu Fragebogen 

PennController ("Ende",
            
            newText ("Danke", "<p align=center> <br> <b>Vielen Dank!</b></br></p> <p><br> Jetzt bitten wir Dich, einen Fragebogen auszufüllen, der uns bei der Auswertung unserer Studie hilft. </br> <br> Hier fragen wir Dich nach einigen persönlichen Angaben (z.B. Alter, Ausbildung) sowie Informationen zu Deinen Sprachkenntnissen und Deinem persönlichen Sprachgebrauch.</br></p>" )
            .center()
            .print()
            ,
            newButton ("Weiter", "Weiter")
            .center()
            .print ()
            .wait()
        );        
    

 //Metadaten
    //Personenbezogene Daten Seite 1 - Alter, Geschlecht, Bildung, Sozialerstatus
PennController("Meta1",
    newImage("HU","hu-logo.png")  
            .size(289,65)
         ,
        newImage("RUEG","UNam Logo.png")
            .size(230,60)
        ,
         newCanvas("Logosnebeneinander",1138,100) //bildet den Header mit Logos
            .add(100,0, getImage("HU"))
            .add(450,0, getImage("UNam"))
            .center()
            .print()
        ,

    newText("Meta-1", "<b>Personenbezogene Daten</b> <p>Wir brauchen einige persönliche Angaben von Ihnen. Diese werden anonymisiert gespeichert und eine spätere Zuordnung zu Ihnen wird nicht möglich sein. Bitte nehmen Sie sich beim Ausfüllen der Felder Zeit.<p>")
 //       .settings.css("text-align","justify")
        .center()
        .print()

               ,
               newCanvas("democanvas", 800,120)
               .settings.add(0,0, getText("Meta-1"))
               //.settings.center()
               .print()
               ,
               //Alter
               newDropDown("age", "Bitte eine Option ausw&auml;hlen")
               .settings.add("18" , "19" , "20", "21" , "22" , "23", "24" , "25" , "26", "27" , "28" , "29", "30" , "31", "32","33", "34" , "35", "36","37","38","39","über 40")
               .log()

               ,
               newText("agetext", "Alter:")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newCanvas("agecanvas", 1000, 40)
               .settings.add(0,0,getText("agetext"))
               .settings.add(450,2, getDropDown("age"))
               //.settings.center()
               .print()
               ,
               //Geschlecht
               newText("sex", "Geschlechtsidentität:")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newDropDown("sex", "Bitte eine Option ausw&auml;hlen")
               .settings.add("Weiblich", "M&auml;nnlich", "Divers")
               .log()
               ,
               newCanvas("sexcanvas", 1000, 40)
               .settings.add(0, 0, getText("sex"))
               .settings.add(450,3, getDropDown("sex"))
               //.settings.center()
               .print()
               ,
               //Wohnort
               newText("wohnort", "Wohnort (Stadt, Region):")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newTextInput("wohnort")

               .log()
               ,
               newCanvas("wohnortcanvas", 1000, 40)
               .settings.add(0, 0, getText("wohnort"))
               .settings.add(450,3, getTextInput("wohnort"))
               //.settings.center()
               .print()
               ,
                newText("Leerzeile"," <br></p>")
                  .center()
                .print()
                ,
                //seit welchem Alter
                newText("Seit", "Wie alt waren Sie, als sie hier hingezogen sind?")
                .settings.css("font-size", "18px")
                .settings.bold()
                ,
                newTextInput("Seit")
                 .log()
                //.settings.size(200,40)
                ,
                newCanvas("Seit", 1000,40)
                .settings.add(0,0, getText("Seit"))
                .settings.add(450,4,getTextInput("Seit"))
                //.settings.center()
                .print()
                ,
                newText("Leerzeile"," <br></p>")
                   .center()
                 .print()
                  ,
                //Vorherige Wohnorte
                newText("Vorher", "Haben Sie vorher an einem anderen Ort gewohnt?")
                .settings.css("font-size", "18px")
                .settings.bold()
                ,
                newTextInput("Vorher")
                 .log()
                //.settings.size(200,40)
                ,
                newCanvas("Vorher", 1000,40)
                .settings.add(0,0, getText("Vorher"))
                .settings.add(450,4,getTextInput("Vorher"))
                //.settings.center()
                .print()
                ,
                newText("Leerzeile"," <br></p>")
                   .center()
                 .print()
                  ,
                 //aufgewachsen
            newText("aufgewachsen", "Wo sind Sie aufgewachsen?")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newTextInput("aufgewachsen")
                .log()
               //.settings.size(200,40)
               ,
               newCanvas("aufgewachsen", 1000,40)
               .settings.add(0,0, getText("aufgewachsen"))
               .settings.add(450,4,getTextInput("aufgewachsen"))
               //.settings.center()
               .print()
               ,
               newText("Leerzeile"," <br></p>")
                  .center()
                .print()
                 ,
                 //Abschluss
                newText("abschluss", "H&ouml;chster Bildungsabschluss:")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newDropDown("abschluss", "Bitte eine Option ausw&auml;hlen")
               .settings.add("kein Abschluss","Schulabschluss","Abitur oder gleichwertiger Abschluss","Studium ohne Abschluss","Bachelor","Master","Magister","Diplom", "Promotion", "Ausbildung", "Sonstige")     // MAYBE ADD QUESTIONS ABOUT DIALECT AND DOMINANT HAND
               //.settings.size(191,20)
               .log()
               ,
               newCanvas("abschlusscanvas", 1000, 40)
               .settings.add(0, 0, getText("abschluss"))
               .settings.add(470,4, getDropDown("abschluss"))
               //.settings.center()
               .print()
               ,
               //Studium
               newText("studium","<b>Studieren Sie?</b><br><small>(Falls ja, welches Fach und Fachsemester?)</small><br><br>")
               .settings.css("font-size", "18px")

               ,
               newTextInput("studiuminput")
               .settings.size(150,40)
               .log()
               .settings.hidden()
               ,
               newText("studium_input", "")
               .settings.after(getTextInput("studiuminput"))
               ,
               newDropDown("studium",  "<br>" +"Bitte eine Option ausw&auml;hlen")
               .settings.add("Ja", "Nein")
               .log()
               .settings.after(getText("studium_input"))
               .settings.callback(
                   getDropDown("studium")
                   .test.selected("Ja")
                   .success(getTextInput("studiuminput").settings.visible(

                   )) )
               ,
               newCanvas("studium", 1000, 40)
               .settings.add(0, 0, getText("studium"))
               .settings.add(500,3, getDropDown("studium"))
               //.settings.center()
               .print()
               ,
               newCanvas("filler", 1, 20)
               .print()
               ,

    newButton("continue", "Weiter")
               .settings.css("font-family", "calibri").settings.css("font-size", "12px")
               //.settings.center()
               .log()
               .center()
               .print()
               .wait(
            newFunction('dummy', ()=>true).test.is(true)
            // age
            .and( getDropDown("age").test.selected()
                    .failure( newText('errorage', "<br>Bitte Alter angeben.").color("red") .center().print() )
            // sex
            ).and( getDropDown("sex").test.selected()
                    .failure( newText('errorsex', "<br>Bitte Geschlecht angeben.").color("red") .center().print() )
             // abschluss
            ) .and( getDropDown("abschluss").test.selected()
                    .failure( newText('errorabschluss', "<br>Bitte höchsten Abschluss angeben.").color("red") .center().print() )

            ).and( getDropDown("studium").test.selected()
                   .failure( newText('errorstudium', "<br>Bitte Studium angeben.").color("red") .center().print() )
                  
            ).and(
             getTextInput("wohnort").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("wohnorter","<br>Bitte Wohnort angeben")
                   .settings.color("red")
                   .center()
                   .print())
                ).and(
             getTextInput("aufgewachsen").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("aufgewachsener","<br>Bitte angeben, wo Sie aufgewachsen sind.")
                   .settings.color("red")
                   .center()
                   .print())

            )  )


               ,
               getDropDown("age").wait("first")
               ,
               getDropDown("sex").wait("first")
               ,
                getDropDown("studium").wait("first")             
               ,
               getDropDown("abschluss").wait("first")
 )
 ;
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
    newImage("HU","HU Logo.png")  
            .size(289,65)
         ,
        newImage("RUEG","dfg_rueg_header.jpg")
            .size(230,60)
        ,
         newCanvas("Logosnebeneinander",1138,100) //bildet den Header mit Logos
            .add(100,0, getImage("HU"))
            .add(450,0, getImage("RUEG"))
            .center()
            .print()
        ,

       newText("getestet","<b>Was denken Sie, was wir in diesem Online-Experiment untersuchen wollen?</b><br>Es gibt keine falschen Antworten. Geben Sie gerne ein Stichwort an.")
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
    newText("Technik","<b>Gab es technische Schwierigkeiten beim Ablauf des Experiments?</b><br> Bitte kurz beschreiben.")
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
       newText("Sätze","<b>Ist dir etwas an den angehörten Sätzen aufgefallen?</b><br> Irgendeine Art von Auffälligkeit.")
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

 newText("Setting","<b>Wie natürlich empfanden Sie das Setting der Studie?</b><br> Konnten Sie sich die Gesprächssituation gut vorstellen?")
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
newText("Sonstiges","<b>Ist Ihnen noch etwas aufgefallen?</b><b> Jedes Feedback ist hilfreich.")
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
    newButton("Ende", "Experiment beenden und Daten abschicken")
               .settings.css("font-family", "calibri").settings.css("font-size", "18px")
               //.settings.center()
               .log()
               .center()
               .print()
               .wait(
            newFunction('dummy', ()=>true).test.is(true)
                .and(
             getTextInput("getestet").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errormutter","<br>Bitte ein Stichwort angeben")
                   .settings.color("red")
                   .center()
                   .print())
                ).and(
             getTextInput("Technik").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errorvater","<br>Wenn alles gut funktioniert hat, bitte &quot;gut&quot;eingeben.")
                   .settings.color("red")
                   .center()
                   .print())
             ).and(
             getTextInput("Sätze").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errorselbst","<br>Bei keinen Auffälligkeiten bitte &quot;keine&quot; angeben.")
                   .settings.color("red")
                   .center()
                   .print())
            ).and(
             getTextInput("Sonstiges").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errordialekt","<br>Für kein weiteres Feedback bitte &quot;keine&quot; schreiben.")
                   .settings.color("red")
                   .center()
                   .print())
            )  

 )
 )
;
//Geloggte Ergebnisse senden
PennController.SendResults("send");

//Abschlussbildschirm
PennController("Final",
         newText("<p>Vielen Dank f&uuml;r Ihre Teilnahme! Die Studie ist hiermit beendet. </p>")
            .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
            .settings.center()
            .print()
        ,

        newText ("<p>Sie können das Fenster jetzt schließen.")
            .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
            .settings.center()
            .print()
        ,
        newButton("void", "")
            .wait()


   )
;


