let geschichte = {
  situationen: [
    {
      id: 0,
      auswahlText: "Im Museum",
      text:
        "<br> *** Die Mumie des Schreckens ***<br>Ein Abenteuer im Museum<br>Von R0MY und P3NNY",
      ziele: [1],
    },
    {
      id: 1,
      auswahlText: "Du betrittst das Museum",
      text:
        "Du bist viel zu spät in das alte Museum gekommen. Dir bleibt nur noch wenig Zeit, bis das Museum schließt. Der erste Gong ertönt. Zeit, sich zum Ausgang zu begeben.",
      ziele: [2, 3],
    },
    {
      id: 2,
      auswahlText: "Du schaust dir noch schnell den Nebenraum an?",
      text:
        "Du gehst noch schnell in den Gang, der von dem Hauptraum abzweigt. Zahlreiche Überreste einer vergangenen Zeit sind ausgestellt. Du vergisst die Zeit und überhörst sogar den letzten Gong. Plötzlich wird es dunkel, als alle Lichter ausgeschaltet werden.",
      ziele: [4],
    },
    {
      id: 3,
      auswahlText: "Du gehst zum Ausgang?",
      text:
        "Du machst dich schnellen Schrittes auf den Weg zum Ausgang. Du willst dich beeilen, doch durch deine große Hast rutscht du aus und stürzt. Du schlägst mit dem Kopf auf und wirst bewusstlos.",
      ziele: [4],
    },
    {
      id: 4,
      auswahlText: "In die Dunkelheit?",
      text:
        "Es ist vollkommen dunkel. Für einen Moment weißt du nicht wo du bist. Du tastest nach deinem Handy, um Licht zu machen, als du Geräusche hörst. Sie kommen offenbar aus einem Nebenraum.",
      ziele: [7],
    },
    {
      id: 7,
      auswahlText: "Du folgst den Geräuschen",
      text:
        "Im Nebenraum siehst du eine Mumie, die sich aufgerichtet hat. Sie flüstert dir mit schauriger Stimme zu: 'Finde drei goldene Münzen, um mich zu erlösen.'",
      ziele: [8, 9, 10],
    },
    {
      id: 8,
      auswahlText: "Du suchst weiter bei den Ägyptern",
      text:
        "Du siehst eine große Pyramide. Und gehst hinein. Dort ist das Grab von Tutenchamun ausgestellt. Du öffnest es und siehst eine Münze zwischen seinen Fingern aufblitzen.",
      ziele: [11],
    },
    {
      id: 9,
      auswahlText: "Du suchst nebenan bei den Römern",
      text:
        "Du stehst vor einem Schrank mit römischen Münzen. Es sind hunderte! Wie findest du die richtige?",
      ziele: [12, 13],
    },
    {
      id: 10,
      auswahlText: "Du suchst drüben bei den Inkas aus Südamerika",
      text:
        "Im Regenwald-Raum kreischt ein Papagei. Du folgst ihm und landest an einem Sumpf mit Krokodilen. Plötzlich öffnet eines von ihnen sein Maul, zwischen den Zähnen steckt eine Münze.",
      ziele: [15, 16],
    },
    {
      id: 11,
      auswahlText: "Du nimmst die Münze",
      text: "Glückwunsch! Du hast eine Münze gefunden!",
      ziele: [9, 10, 18],
    },
    {
      id: 12,
      auswahlText:
        "Du fragst den römischen Soldaten, der als Figur im Raum steht",
      text:
        "Der Soldat ist leider nur eine Puppe in schicken alten Kleidern, die dir nicht weiterhelfen kann.",
      ziele: [13],
    },
    {
      id: 13,
      auswahlText: "Du liest eine Inschrift auf dem Schrank",
      text:
        "Klein auf dem Schrank steht: 'Die wertvollste Münze ist die Münze in der fünften Reihe oben links. Sie ist aus purem GOLD!",
      ziele: [14],
    },
    {
      id: 14,
      auswahlText: "Du nimmst die Münze aus dem Schrank",
      text: "Glückwunsch, die Münze hast du sicher!",
      ziele: [8, 10, 18],
    },
    {
      id: 15,
      auswahlText: "Du siehst eine Angel",
      text:
        "An der Wand lehnt eine Angel. Du nimmst sie und angelst die Münze geschickt zwischen den Zähnen des Krokodils heraus.",
      ziele: [17],
    },
    {
      id: 16,
      auswahlText: "Du greifst dem Krokodil ins Maul",
      text:
        "Puh, das war knapp. Fast hätte das Krokodil deine Hand erwischt. Gerade noch rechtzeitig ziehst du die Hand weg, bevor die messerscharfen Zähne zuklappen.",
      ziele: [15],
    },
    {
      id: 17,
      auswahlText: "Du hast die Münze!",
      text: "Glückwunsch, du steckst die Münze ein.",
      ziele: [8, 9, 18],
    },
    {
      id: 18,
      auswahlText: "Du hast drei Münzen und kehrst zurück zur Mumie",
      text:
        "Außer Atem kommst du bei der Mumie an. Du legst der Mumie die Münzen auf den Schoß. Die Mumie verzieht ihr Gesicht zu einem Lächeln: 'Danke, du hast mich gerettet!' Sobald die Münzen die Mumie berühren, gerät der Stoff in Brand, in den sie eingewickelt ist. Die ganze Mumie geht in Flammen auf, übrig bleibt nur ein Häufchen Staub. In der Luft hängt ein Seufzen und dort, wo die Mumie war, liegt eine Goldmünze als Belohnung für dich.<br><br>ENDE",
      ziele: [],
    },
  ],
};
