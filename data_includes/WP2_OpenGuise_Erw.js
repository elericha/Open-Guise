PennController.ResetPrefix(null);
PennController.AddHost("https://amor.cms.hu-berlin.de/~idlsfbnd/openguise/");
PennController.DebugOff();

Sequence("Info","Consent","Code","Anleitung","Item","ItemQ","Meta1","Meta2","send","Final");


//audio 

audios = []     // audios will reference the audios in a randomized order for simple playback
,
audios2 = []    // audios2 will ultimately be a copy of audios
// Create dummy trials to browse the table and feed then shuffle audios
,
Template("OG-audios.csv", row =>
    newTrial( audios.push(row.Audio),
    fisherYates(audios) )
    )

// Now create the Item trials reading the audio references from audios
,
audio = ""
,Template( row =>
    newTrial( "Item",
        audio = audios.shift(), // Extract next entry from audios
        audios2.push(audio)     // Place it in audios2
        ,
    newAudio( audio )
            .center()
            .once()
        ,
    newImage("message","MessageOpenGuise.png")
            .size(708,522)
        ,
    newCanvas("Message", 708,522 )
        .add(   0, 0, getImage("message"))
        .add( 150, 360, getAudio(audio))
    .print()
         ,
        newText("Bewertung","<p><br>Bitte der Aufnahme eine Gesprächssituation zuordnen. Hat die Sprecherin mit einer <b>Freund*in</b> oder einer <b>Lehrer*in</b> gesprochen? Dazu Punkt auf der Skala auswählen. </p>")
          .settings.css("font-family", "calibri").settings.css("font-size", "18px")
           .center()
            .print()
    ,
    newCanvas(600,120)
        .add(50, 0, getText("Bewertung"))
        .center()
        .print()
      ,
    newScale("Skala1", 9)
        .settings.css("font-family", "calibri").settings.css("font-size", "22px")
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("<b>Freund*in</b>"))
        .settings.after(newText("<b>Lehrer*in</b>"))
        .center()
        ,
    newCanvas(600,50)
        .add(150, 0, getScale("Skala1").settings.log("final"))
        .center()
        .print()
    ,
        newButton( "Weiter" )
            .center()
            .print()
            .wait(getScale("Skala1").test.selected())
    )
    .log("audio", audio)    // Log which audio was played
)
,
newTrial("Zwischenstopp",
 
    newText("Anleitung","Vielen Dank! Nun beginnt die zweite Phase des Experiments. In den nächsten Schritten werden die gleichen Aufnahmen erneut angehört und es soll die vorherige Einordnung der Nachrichten in eine Gesprächssituation begründet werden.<p>")
        .center()
        .print()
,
    newButton("Weiter", "Bitte weiter klicken sobald bereit")
    .center()
        .print()
        .wait()
        )
,

// Now create the ItemQ trials reading the audio references from audios2
audio = ""
,Template( row =>
    newTrial( "ItemQ",
        audio = audios2.shift() // Extract next entry from audios2
        ,
        newAudio( audio )
            .center()
            .once()
        ,
    newImage("message","MessageOpenGuise.png")
            .size(708,522)
        ,
    newCanvas("Message", 708,522 )
        .add(   0, 0, getImage("message"))
        .add( 150, 360, getAudio(audio))
    .print()
         ,
        newText("Bewertung2","<p><br>Bitte die vorherige Einordnung der Gesprächssituation begründen. <b>Warum</b> hat die Sprecherin mit einer <b>Freund*in</b> oder einer <b>Lehrer*in</b> gesprochen?</p>")
          .settings.css("font-family", "calibri").settings.css("font-size", "18px")
           .center()
            .print()
    ,
    newCanvas(600,120)
        .add(50, 0, getText("Bewertung2"))
        .center()
        .print()
      ,
       newTextInput("Begründung")
        .center()
        .print()
        .log()

,
    getTextInput("Begründung").settings.log("final")

,
    newButton( "Weiter" )
        .center()
        .print()
        .wait(getTextInput("Begründung").test.text(/[a-z]+/))
    )
    .log("audio", audio)
    
    )
    ,
//New Consent 
//Mit Boxen zum Anklicken und Dateien zum herunterladen; angelehnt an C04

newTrial("Consent",
 newImage("HU","HU Logo.png")
        .size(289,65)
    ,
newImage("UNam","UNam Logo.png")
    .size(230,60)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(450,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newHtml("Consent", "consent.html")
        .center()
        .settings.css("font-size", "large")
        .print()
,
    newButton("Weiter","Weiter")
    .print()
    .log()
    .wait(
        getHtml("Consent").test.complete()
            .failure(getHtml("Consent").warn())
    )
)
,
//WILLKOMMENSSEITE & INFOBLATT
newTrial("Info",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
newImage("UNam","UNam Logo.png")
    .size(230,60),
  
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(450,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newHtml("willkommen", "information.html")
        .center()
        .settings.css("font-size", "large")
        .print()
    ,

    newButton("Weiter_Alter","Ich bin über 18 Jahre.")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .print()
    ,
    getButton("Weiter_Alter")
        .wait()
)
    ,

//CODE-EINGABE
newTrial("Code",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
    .size(230,60)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(450,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,

    newHtml("Code", "code.html")
        .center()
        .settings.css("font-size", "large")
        .print()
    ,
    newCanvas("Code-Textfeld", 1, 10)
        .center()
        .print()
,
    newTextInput("Texteingabe-Code")
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
//    newText("Danke","Vielen Dank! Als nächstes folgt eine Einwilligungserklärung. Klicken Sie bitte auf den Button.<b></p>")
//        .center()
//        .print()
//,
    newButton("weiter","zur Anleitung")
        .center()
        .print()
        .wait(
            getTextInput("Texteingabe-Code").test.text(/^.+/)
                    .failure( newText('errorcode', "<br>Bitte gib den Code ein.").color("red") .center().print() )
            )
,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
)
,

//Anleitung
newTrial("Anleitung",
newHtml("Anleitung","anleitung.html")
    .settings.css("font-size", "large")
    .center()
    .print()
,
newButton("buttonErklärung", "Weiter zum Erklärbild")
            .settings.css("font-family", "calibri").settings.css("font-size", "12px")
            .settings.center()
            .print()
            .wait()
,
getHtml("Anleitung")
    .remove()
,
getButton("buttonErklärung")
    .remove()
,
newText("Anleitung2", "So sieht das Experiment nachher aus. Als nächstes folgt eine Probe des Experiments.")
    .settings.css("font-family", "calibri").settings.css("font-size", "16px")
            .settings.center()
            .print()
,
newImage("openguiseanleitung", "OpenGuiseAnleitung.png")
    .settings.center()
    .print()
,
newButton("buttonProbe", "Weiter")
            .settings.css("font-family", "calibri").settings.css("font-size", "12px")
            .settings.center()
            .print()
            .wait()
,
getText("Anleitung2")
    .remove()
,
getImage("openguiseanleitung")
    .remove()
,
getButton("buttonProbe")
    .remove()
,
NewText("Probe1","<p>Bitte einmal auf <b> Play> klicken.</p>")
        .center()
        .print()
,
      newAudio("Probe", "Audio1.wav")
        .center()
        .once()
        .print()
        
,
    newText("Probe-2","<p>Probe für Durchgang 1: Bitte Punkt auf der <b>Skala</b> anklicken<br>Hat die Sprecherin mit einer <b>Freund*in</b> oder einer <b>Lehrer*in</b> gesprochen?</p>")
        .center()
        .print()
,
    
    newScale("Probeskala1", 9)
        .settings.css("font-family", "calibri").settings.css("font-size", "22px")
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("<b>Freund*in</b>"))
        .settings.after(newText("<b>Lehrer*in</b>"))
        .center()
        .print()
,
newText("Probe-8","<p><b>Probe für Durchgang 2: Bitte einen kurzen Text in das Textfeld schreiben.</b></p>")
.center()
.print()
,
newCanvas("Probetextfeld5", 1, 10)
.center()
.print()
,
newTextInput("Probetexteingabe5")
.center()
.print()
,        
newText("Probe-4", "<br>Sehr gut! Sobald ein Wert auf der Skala ausgewählt wurde und Text im Textfeld steht, erscheint ein Button am Ende der Seite, mit dem das Experiment gestartet wird.</p>")
.center()
.print()
,       
newButton("Experimentstarten","Experiment beginnen")
.center()
.print()
.wait(getScale("Probeskala1").test.selected())
)
,


    //Metadaten
    //Personenbezogene Daten Seite 1 - Alter, Geschlecht, Bildung, Sozialerstatus
newTrial("Meta1",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
    .size(230,60)
    ,
     newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(450,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
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
               newText("sex", "Geschlecht:")
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
               .settings.add("kein Abschluss","Schulabschluss","Abitur oder gleichwertiger Abschluss","Studium ohne Abschluss","Bachelor","Master", "Promotion", "Ausbildung", "Sonstige")     // MAYBE ADD QUESTIONS ABOUT DIALECT AND DOMINANT HAND
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
               newText("ausland","<b>Waren Sie länger als 6 Monate am Stück in Deutschland?</b><br><small>(Falls ja, wann und wie lange?)</small><br><br>")
               .settings.css("font-size", "18px")

               ,
               newTextInput("auslandinput")
               .settings.size(150,40)
               .log()
               .settings.hidden()
               ,
               newText("ausland_input", "")
               .settings.after(getTextInput("auslandinput"))
               ,
               newDropDown("ausland",  "<br>" +"Bitte eine Option ausw&auml;hlen")
               .settings.add("Ja", "Nein")
               .log()
               .settings.after(getText("ausland_input"))
               .settings.callback(
                   getDropDown("ausland")
                    .test.selected("Ja")
                   .success(getTextInput("auslandinput").settings.visible(

                   )) )
               ,
               newCanvas("ausland", 1000, 40)
               .settings.add(0, 0, getText("ausland"))
               .settings.add(500,3, getDropDown("ausland"))
               //.settings.center()
               .print()
               ,
               newCanvas("filler", 1, 20)

               .print()
               ,

              //Leiter
               newText("Leiter","<b>Die untenstehende Leiter</b> repr&auml;sentiert den relativen Sozialstatus der Menschen in Deutschland. "
                       +"An der Spitze der Leiter stehen Menschen mit relativ hohem Status – diejenigen, die das meiste Geld, die beste Bildung und die angesehensten Arbeitspl&auml;tze haben. Ganz unten sind Menschen mit relativ niedrigem Status – beispielsweise als arbeitslos Gemeldete. Relativ weit unten zu verorten w&auml;ren auch diejenigen, die nur wenig Geld verdienen, einen niedrigen Bildungstand haben, und / oder Berufe aus&uuml;ben, die die Gesellschaft als eher wenig respektabel ansieht."
                       +"<br> Wo w&uuml;rden Sie Sich auf dieser Leiter einordnen? W&auml;hlen Sie bitte die Sprosse, die Ihrem empfundenen Sozialstatus am ehesten entspricht.")
               .settings.css("font-size", "18px")
               .settings.css("text-align","justify")
               ,
               newDropDown("leiter", "Bitte eine Option ausw&auml;hlen")
               .settings.add("A", "B", "C","D", "E", "F","G", "H", "I","J")
               .log()
               ,
               newImage("leiter", "https://amor.cms.hu-berlin.de/~patarroa/Leiter.jpeg")
               .settings.size(200,300)
               ,
               newCanvas("leitercanvas", 1000,20)
               .settings.add(0, 10, getText("Leiter"))
               //.settings.center()
               .print()
               ,
               newCanvas("leitercanvas2", 1000,350)
               .settings.add(250,200, getImage("leiter"))
               .settings.add(400,300, getDropDown("leiter"))
               //.settings.center()
               .print()
               ,
              newCanvas("filler2", 40, 150)
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

            ).and( getDropDown("ausland").test.selected()
                   .failure( newText('errorausland', "<br>Bitte Informationen zum Aufland in Deutschland angeben.").color("red") .center().print() )

            ).and(getDropDown("leiter").test.selected()
                   .failure( newText('leitererr', "<br>Bitte Variante auf der Leiter angeben.").color("red") .center().print() )

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
                getDropDown("ausland").wait("first")
               ,
               getDropDown("leiter").wait("first")
               ,
               getDropDown("abschluss").wait("first")
  ,
  //Metadaten 2: Sprachbiographie
newTrial("Meta2",
newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
    .size(230,60)
    ,
        newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(450,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
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
                   newText("errorselbst","<br>Bitte angeben wo Sie aufgewachsen sind.")
                   .settings.color("red")
            ).and(
             getTextInput("Dialekt").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errordialekt","<br>Bitte Dialekt angeben.")
                   .settings.color("red")
                   .center()
                   .print())
            )  )

 )
 )
),

// Send results manually
SendResults("send")
),
newTrial("Final",
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


   );


