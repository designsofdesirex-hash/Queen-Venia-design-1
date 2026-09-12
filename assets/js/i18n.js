/**
 * Queen Venia Nyx — Bilingual Translation Engine (EN / DE)
 * English is default. Persists to localStorage ('princess_leyla_lang').
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'princess_leyla_lang';

  const TRANSLATIONS = {
    en: {
      langCode: 'en',
      
      // Header & Navigation
      navHome: 'Home',
      navRules: 'Rules & Services',
      navGallery: 'Gallery',
      navTribute: 'Tribute',
      navBook: 'Book Me',
      headerMotto: 'I control your thoughts - you cannot escape me',

      // Age Gate
      ageGateTitle: 'Step Into My Reality',
      ageGateSub: 'Strictly 18+ · Adult Audiences Only',
      ageGateDesc: 'You are entering my private world dedicated to luxury nylon legs, soft arched soles, sweaty socks, and psychological femdom. By stepping inside, you confirm you are at least 18 years old and ready to submit.',
      ageGateConsent: '🛡️ Essential Cookies & 18+ Verification Only · Zero Ad Tracking',
      ageGateEnter: 'I Am 18+ & Accept — Enter My Realm',
      ageGateExit: 'Exit',
      ageGateMeta: 'Entering confirms you are 18+ and agree to the <a href="content-notice.html" style="color:var(--accent);">Content Notice</a>, <a href="cookies.html" style="color:var(--accent);">Cookie Policy</a> &amp; <a href="privacy.html" style="color:var(--accent);">Privacy Policy</a>.',

      // Mobile Bar
      mobileBarBook: 'Book Me',

      // Cookie Banner
      cookieTitle: 'Your privacy choices',
      cookieDesc: 'Necessary cookies keep the site running and are always on. Everything else is your call.',
      cookieBtnNec: 'Necessary only',
      cookieBtnSave: 'Save choices',

      // Footer
      footerBrandBadge: '👑 Sovereign Finprincess',
      footerBrandSub: 'Professional finprincess & certified simp collector',
      footerColNav: '<span class="gold-symbol">✦</span> Navigation',
      footerColPortals: '<span class="gold-symbol">✦</span> Official Portals',
      footerColLegal: '<span class="gold-symbol">✦</span> Legal & Compliance',
      footerLinkHome: 'Home',
      footerLinkRules: 'Rules & Services',
      footerLinkGallery: 'Gallery Archive',
      footerLinkTribute: 'Tribute Realm',
      footerLinkBook: 'Book Session',
      footerLinkPrivacy: 'Privacy Policy',
      footerLinkTerms: 'Terms of Service',
      footerLinkCookies: 'Cookie Policy',
      footerLinkNotice: 'Content Notice',
      footerTagline: '"Pretty, toxic, and expensive — your favourite financial ruin."',
      footerBottomBadge: '✦ Sovereign Finprincess Maison',
      footerRights: 'All rights reserved.',

      // Home (index.html)
      homeEyebrow: 'FINDOM · CHASTITY · SISSIES · CUCKS · CBT · HUMILIATION',
      homeTitle: 'Step Into My Reality',
      homeMotto: '"Men have been funding my lifestyle since 2025."',
      rotatorItems: [
        'Chastity & Key Keeper',
        'Sissy Education & Training',
        'Strict CBT & Humiliation',
        'Findom & Financial Drain',
        'Brutal Dick Ratings',
        'Worn Socks & Nylon Relics',
        'Live Tease & Domination'
      ],
      homeBtnBook: 'Book Me',
      homeBtnRules: 'Read the Rules',
      aboutEyebrow: 'Who I Am',
      aboutTitle: 'Pretty, toxic, and out of your league.',
      aboutQuote: '"Replies aren’t free. If you want my attention, pay for it."',
      aboutP1: 'Finprincess with expensive taste. I collect simps, drain wallets, and let you worship what you could never afford to touch.',
      aboutP2: 'No free attention. Send your tribute, know your place, and make yourself useful.',

      // Book (book.html)
      bookEyebrow: 'Booking',
      bookTitle: 'Book Me',
      bookingCardLabel: 'Devotion Application',
      bookingCardTitle: 'Try to impress me.',
      bookingCardDesc: 'Upfront payment required via PayPal, Revolut, Tipfunder, or OnlyFans.',
      bookingCardBadge: 'Upfront Payment',
      bookingSuccessH3: 'Good. Now send it.',
      bookingSuccessP: 'Your request is copied. Send it to Queen Venia Nyx with your upfront payment confirmation and attached username. Unpaid requests are discarded immediately.',
      dividerWho: 'Who are you?',
      labelName: 'Name / pathetic little alias <span>(optional)</span>',
      placeholderName: 'e.g. needy beta',
      labelContact: 'Telegram / X handle / email <span>(optional)</span>',
      placeholderContact: 'e.g. @yourhandle',
      dividerWhat: 'What do you want?',
      labelService: 'What are you begging for? <span>(optional)</span>',
      servicePlaceholder: 'Pick your service...',
      serviceOption1: 'Chastity Supervision (20€ / week)',
      serviceOption2: 'Custom Humiliation Video',
      serviceOption3: 'Exclusive Archive Photo Set',
      serviceOption4: 'Worn Item / Sock Tribute',
      serviceOption5: 'Ongoing Simp Management',
      serviceOption6: 'Special Custom Request',
      labelBudget: 'What can you afford? <span>(optional)</span>',
      budgetPlaceholder: 'Confirm tribute budget...',
      budgetOption1: '20€ – 50€ (Weekly supervision / Worn item)',
      labelPlatform: 'Where will you send it? <span>(optional)</span>',
      labelDetails: 'Give me the details <span>(optional)</span>',
      placeholderDetails: 'Tell me how you want to be humiliated, what you want to see, and how much you’re sending...',
      checkboxTerms: 'I confirm I am 18+, agree to the terms, and understand upfront payment must accompany this booking with my username attached. <strong>(required)</strong>',
      dividerUseful: 'Prove you’re useful',
      btnSubmit: 'Submit Request &amp; Send to Queen Venia Nyx',
      btnTelegram: 'Message Telegram ↗',
      btnX: 'Message on X ↗',
      whatNextTitle: 'What happens next',
      whatNext1: 'I review your request within 24–48 hours.',
      whatNext2: 'If approved, you\'ll receive a secure payment link.',
      whatNext3: 'Work begins once payment clears — you\'ll get a delivery window.',
      whatNext4: 'Inquiries accompanied by initial tribute: Contact on <a href="https://t.me/venianyx" target="_blank" rel="noopener" style="color:var(--accent); font-weight:600;">Telegram (@venianyx)</a> or <a href="https://x.com/QueenVeniaNyx" target="_blank" rel="noopener" style="color:var(--accent); font-weight:600;">X (@QueenVeniaNyx)</a>.',

      // Rules (rules.html)
      rulesEyebrow: 'Read Before Anything',
      rulesTitle: 'The Rules',
      rulesLede: 'These are my terms. Not a suggestion — a requirement. Read once, obey always, or leave.',
      rule1Title: 'No Unsolicited Pictures',
      rule1Desc: 'Don\'t send photos I didn\'t ask for. Not in DMs, not on Telegram, not anywhere. If I want to see something, I\'ll tell you. Break this and you\'re blocked instantly.',
      rule2Title: 'No Calls Without Permission',
      rule2Desc: 'Don\'t call unless we\'ve arranged a video call session and you\'ve paid for it. Message first — always. Unexpected calls get you blocked permanently.',
      rule3Title: 'Payment First — Always',
      rule3Desc: 'Tributes and payments clear before anything happens. A payment link is sent once your request is confirmed. No "I\'ll pay after," no exceptions. Chargebacks = permanent blacklist, no refund, no discussion.',
      rule4Title: 'Privacy Must Be Respected',
      rule4Desc: 'What happens between us stays between us. No sharing my content, no screenshotting chats, no reposting my feet, socks, or session content anywhere. Every file is watermarked and traceable. If I find my work leaked, you\'re done — and I will find it.',
      rule5Title: 'Be Direct About What You Want',
      rule5Desc: 'Tell me exactly what you want - the fetish, the outfit, the scenario, the intensity level. Foot fetish? Dirty socks after gym? Ballbusting? SPH? Nylon handjob? The more specific, the better your custom. Vague requests like "surprise me" waste my time and cost you more.',
      rule6Title: 'Communication Windows',
      rule6Desc: "I reply within 24–48 hours. If you haven't heard back, wait. Don't send follow-ups, don't message on multiple platforms, don't try to 'check in.' Repeated pinging gets you blocked. VIP members get faster replies.",
      rule7Title: 'Break the Rules, Lose Access',
      rule7Desc: 'Violate any of the above — redistribution, disrespect, boundary-pushing, payment games — and you\'re blocked permanently. No refund, no second chance, no discussion.',
      menuEyebrow: 'What\'s Available',
      menuTitle: 'The Menu',
      menuLede: 'Everything below is booked through the Book Me page. Pick your desire, tell me your fantasy, pay up, and I handle the rest.',
      service1Title: 'Chastity & Sissy Education',
      service1Desc: 'Strict psychological control, lock-up supervision, and complete surrender. For obedient submissives and sissies ready to give up control.',
      service2Title: 'Live Video Calls & Chat Sessions',
      service2Desc: 'Direct 1-on-1 access to Queen Venia Nyx. Real-time visual domination, live tasks, voice teasing, and intense focus.',
      service3Title: 'Dick Ratings & Custom Media',
      service3Desc: 'Honest, brutal, and humiliating breakdown of your size, shape, and worthlessness. Or personalized custom fetish videos made to ruin you.',
      service4Title: 'Worn Items (Socks, Tights, Dessous)',
      service4Desc: 'Physical scent relics and textiles worn directly on Queen Venia Nyx\'s arches, legs, and body. Sealed and discreetly shipped.',
      processTitle: 'The Process',
      step1Title: 'Submit',
      step1Desc: 'Fill out the detailed booking request.',
      step2Title: 'Review',
      step2Desc: 'I review within 24–48h. A secure payment link is sent.',
      step3Title: 'Delivery',
      step3Desc: 'Work begins once payment clears. Delivery window provided.',

      // Gallery (gallery.html)
      galleryEyebrow: 'Protected Gallery',
      galleryTitle: 'The Archive',
      galleryLede: 'A visual archive of pure obsession — killer facial expressions, hypnotic gaze, endless nylon legs, pointed stilettos, and sensual soft feet. Watermarked and view-only.',
      galleryNotice: 'All images and videos are original, copyrighted, and watermarked intellectual property of <strong>Queen Venia Nyx</strong>. Unauthorized copying, scraping, or redistribution is strictly prohibited.',
      galleryLoadMore: 'Load More',
      galleryAllLoaded: '✦ All archival media unlocked',

      // Tribute (tribute.html)
      tributeHeroEyebrow: 'The Inner Sanctum',
      tributeHeroTitle: 'Kneel.<br>Submit.<br>Pay.',
      tributeHeroSubtitle: 'Real subs and foot slaves already know where they belong — kneeling, eyes down, wallet ready.',
      tributeHeroAction: 'Prove Your Worth',
      tributePortalsEyebrow: 'Official Portals',
      tributePortalsTitle: 'Direct Tribute & Offerings',
      tributePortalsSubtitle: 'Every interaction begins with submission. When tributing, always attach your username so Queen Venia Nyx can acknowledge you.',
      tribute1Desc: 'Direct cash tribute to your Princess. Fast, seamless draining for obedient simps. Attach your username in the tip message.',
      tribute2Desc: 'Direct payment and tribute. Important: Include your username (Telegram/X) in the transfer reference memo so your payment is verified.',
      tribute3Desc: 'Shower Queen Venia Nyx with luxury gifts, outfits, and shoes. Buy directly from her curated Throne wishlist with your username attached.',
      tribute4Desc: 'Unlock exclusive uncensored clips, private photo sets, and continuous monthly tribute access on LoyalFans.',
      tribute5Desc: 'Direct messaging line with Queen Venia Nyx for verified tributes and urgent inquiries.',
      tribute6Desc: 'Daily superiority, brat updates, and public humiliation. Follow, retweet, and DM with your tribute confirmation.',
      tributeQuotesTitle: 'Pure Control'
    },

    de: {
      langCode: 'de',

      // Header & Navigation
      navHome: 'Startseite',
      navRules: 'Regeln & Angebote',
      navGallery: 'Galerie',
      navTribute: 'Tribut',
      navBook: 'Buchen',
      headerMotto: 'Ich kontrolliere deine Gedanken - du kannst mir nicht entkommen',

      // Age Gate
      ageGateTitle: 'Tritt ein in meine Realität',
      ageGateSub: 'Streng ab 18 · Nur für Erwachsene',
      ageGateDesc: 'Du betrittst meine private Welt, die luxuriösen Nylonbeinen, weichen Fußsohlen, verschwitzten Socken und psychologischem Femdom gewidmet ist. Mit deinem Eintritt bestätigst du, dass du mindestens 18 Jahre alt und bereit bist, dich zu unterwerfen.',
      ageGateConsent: '🛡️ Nur essenzielle Cookies & Speicherung · Keine Werbetracker',
      ageGateEnter: 'Ich bin 18+ & Akzeptiere — Mein Reich betreten',
      ageGateExit: 'Verlassen',
      ageGateMeta: 'Mit dem Betreten bestätigst du, dass du 18+ bist und den <a href="content-notice.html" style="color:var(--accent);">Inhaltshinweis</a>, die <a href="cookies.html" style="color:var(--accent);">Cookie-Richtlinie</a> &amp; die <a href="privacy.html" style="color:var(--accent);">Datenschutzerklärung</a> akzeptierst.',

      // Mobile Bar
      mobileBarBook: 'Buchen',

      // Cookie Banner
      cookieTitle: 'Deine Privatsphäre-Einstellungen',
      cookieDesc: 'Notwendige Cookies gewährleisten den Betrieb der Website. Alles Weitere entscheidest du.',
      cookieBtnNec: 'Nur notwendige',
      cookieBtnSave: 'Auswahl speichern',

      // Footer
      footerBrandBadge: '👑 Souveräne Finprincess',
      footerBrandSub: 'Professionelle Finprincess & zertifizierte Simp-Kollektorin',
      footerColNav: '<span class="gold-symbol">✦</span> Navigation',
      footerColPortals: '<span class="gold-symbol">✦</span> Offizielle Portale',
      footerColLegal: '<span class="gold-symbol">✦</span> Rechtliches & Compliance',
      footerLinkHome: 'Startseite',
      footerLinkRules: 'Regeln & Angebote',
      footerLinkGallery: 'Galerie-Archiv',
      footerLinkTribute: 'Tribut-Reich',
      footerLinkBook: 'Session buchen',
      footerLinkPrivacy: 'Datenschutzerklärung',
      footerLinkTerms: 'Nutzungsbedingungen',
      footerLinkCookies: 'Cookie-Richtlinie',
      footerLinkNotice: 'Inhaltshinweis',
      footerTagline: '"Hübsch, toxisch und teuer — dein liebster finanzieller Ruin."',
      footerBottomBadge: '✦ Sovereign Finprincess Maison',
      footerRights: 'Alle Rechte vorbehalten.',

      // Home (index.html)
      homeEyebrow: 'FINDOM · KEUSCHHALTUNG · SISSIES · CUCKS · CBT · DEMÜTIGUNG',
      homeTitle: 'Tritt ein in meine Realität',
      homeMotto: '"Männer finanzieren meinen Lifestyle seit 2025."',
      rotatorItems: [
        'Keuschhaltung & Key Keeper',
        'Sissy-Erziehung & Training',
        'Striktes CBT & Demütigung',
        'Findom & Kontoentleerung',
        'Brutale Schwanzbewertung',
        'Getragene Socken & Nylon-Relikte',
        'Live-Tease & Dominanz'
      ],
      homeBtnBook: 'Buchen',
      homeBtnRules: 'Regeln lesen',
      aboutEyebrow: 'Wer ich bin',
      aboutTitle: 'Hübsch, toxisch und außer deiner Reichweite.',
      aboutQuote: '"Antworten sind nicht umsonst. Wenn du meine Aufmerksamkeit willst, zahl dafür."',
      aboutP1: 'Geldherrin mit teurem Geschmack. Ich sammle Simps, leere Konten und lasse dich anbeten, was du niemals berühren kannst.',
      aboutP2: 'Keine kostenlose Aufmerksamkeit. Sende deinen Tribut, kenne deinen Platz und mach dich nützlich.',

      // Book (book.html)
      bookEyebrow: 'Buchung',
      bookTitle: 'Mich Buchen',
      bookingCardLabel: 'Hingabe-Bewerbung',
      bookingCardTitle: 'Versuch mich zu beeindrucken.',
      bookingCardDesc: 'Vorauszahlung über PayPal, Revolut, Tipfunder oder OnlyFans erforderlich.',
      bookingCardBadge: 'Vorauszahlung',
      bookingSuccessH3: 'Gut. Jetzt absenden.',
      bookingSuccessP: 'Deine Anfrage ist kopiert. Sende sie an Queen Venia Nyx zusammen mit deiner Zahlungsbestätigung und deinem Benutzernamen. Unbezahlte Anfragen werden ignoriert.',
      dividerWho: 'Wer bist du?',
      labelName: 'Name / erbärmliches Pseudonym <span>(optional)</span>',
      placeholderName: 'z.B. bedürftiger Beta',
      labelContact: 'Telegram / X-Handle / E-Mail <span>(optional)</span>',
      placeholderContact: 'z.B. @deinhandle',
      dividerWhat: 'Was willst du?',
      labelService: 'Worum bettelst du? <span>(optional)</span>',
      servicePlaceholder: 'Wähle deinen Service...',
      serviceOption1: 'Keuschhaltung (20€ / Woche)',
      serviceOption2: 'Individuelles Erniedrigungsvideo',
      serviceOption3: 'Exklusives Archiv-Fotoset',
      serviceOption4: 'Getragener Artikel / Socken-Tribut',
      serviceOption5: 'Laufende Simp-Verwaltung',
      serviceOption6: 'Spezielle Sonderanfrage',
      labelBudget: 'Was kannst du dir leisten? <span>(optional)</span>',
      budgetPlaceholder: 'Tribut-Budget bestätigen...',
      budgetOption1: '30 € (Erstgebühr zum Sprechen)',
      labelPlatform: 'Wohin sendest du es? <span>(optional)</span>',
      labelDetails: 'Gib mir die Details <span>(optional)</span>',
      placeholderDetails: 'Erzähl mir, wie du erniedrigt werden willst, was du sehen willst und wie viel du sendest...',
      checkboxTerms: 'Ich bestätige, dass ich 18+ bin, den Bedingungen zustimme und verstehe, dass die Vorauszahlung mit meinem Benutzernamen beiliegen muss. <strong>(erforderlich)</strong>',
      dividerUseful: 'Mach dich nützlich',
      btnSubmit: 'Anfrage absenden &amp; an Queen Venia Nyx schicken',
      btnTelegram: 'Telegram Nachricht ↗',
      btnX: 'Auf X schreiben ↗',
      whatNextTitle: 'Wie es weitergeht',
      whatNext1: 'Ich prüfe deine Anfrage innerhalb von 24–48 Stunden.',
      whatNext2: 'Bei Genehmigung erhältst du einen sicheren Zahlungslink.',
      whatNext3: 'Die Arbeit beginnt nach Zahlungseingang — du erhältst ein Lieferfenster.',
      whatNext4: 'Anfragen mit beiliegendem Tribut: Melde dich auf <a href="https://t.me/venianyx" target="_blank" rel="noopener" style="color:var(--accent); font-weight:600;">Telegram (@venianyx)</a> oder <a href="https://x.com/QueenVeniaNyx" target="_blank" rel="noopener" style="color:var(--accent); font-weight:600;">X (@QueenVeniaNyx)</a>.',

      // Rules (rules.html)
      rulesEyebrow: 'Vor allem anderen lesen',
      rulesTitle: 'Die Regeln',
      rulesLede: 'Das sind meine Bedingungen. Kein Vorschlag — eine Pflicht. Einmal lesen, immer gehorchen oder verschwinden.',
      rule1Title: 'Keine ungefragten Bilder',
      rule1Desc: 'Schicke keine Fotos, nach denen ich nicht gefragt habe. Nicht in DMs, nicht auf Telegram, nirgendwo. Wenn ich etwas sehen will, sage ich es dir. Verstöße führen zum sofortigen Block.',
      rule2Title: 'Keine Anrufe ohne Erlaubnis',
      rule2Desc: 'Ruf nicht an, es sei denn, wir haben eine Video-Session vereinbart und du hast dafür bezahlt. Immer zuerst schreiben. Unerwartete Anrufe führen zum dauerhaften Block.',
      rule3Title: 'Erst zahlen — Immer',
      rule3Desc: 'Tribute und Zahlungen werden vor Beginn beglichen. Ein Zahlungslink wird nach Bestätigung gesendet. Kein "Ich zahle danach", keine Ausnahmen. Rückbuchungen = dauerhafte Blacklist, keine Rückerstattung, keine Diskussion.',
      rule4Title: 'Privatsphäre muss respektiert werden',
      rule4Desc: 'Was zwischen uns geschieht, bleibt zwischen uns. Kein Weiterleiten meiner Inhalte, keine Screenshots von Chats, kein Reposten meiner Füße, Socken oder Sessions. Jede Datei ist mit Wasserzeichen versehen und rückverfolgbar.',
      rule5Title: 'Sei direkt bezüglich deiner Wünsche',
      rule5Desc: 'Sag mir genau, was du willst – Fetisch, Outfit, Szenario, Intensitätsstufe. Je präziser, desto besser dein Custom. Vage Anfragen wie "Überrasch mich" verschwenden meine Zeit und kosten dich mehr.',
      rule6Title: 'Kommunikationszeiten',
      rule6Desc: 'Ich antworte innerhalb von 24–48 Stunden. Warte ab. Keine Nachfragen auf mehreren Plattformen. Wiederholtes Pingen führt zum Block. VIP-Mitglieder erhalten schnellere Antworten.',
      rule7Title: 'Regelbruch bedeutet Zugangsverlust',
      rule7Desc: 'Verstöße gegen diese Regeln – Weitergabe, Respektlosigkeit, Grenzverletzungen, Zahlungsspiele – führen zum dauerhaften Ausschluss. Keine Rückerstattung, keine zweite Chance.',
      menuEyebrow: 'Was verfügbar ist',
      menuTitle: 'Das Angebot',
      menuLede: 'Alles hier wird über die Buchen-Seite angefragt. Wähle dein Verlangen, nenne deine Fantasie, zahle und ich erledige den Rest.',
      service1Title: 'Keuschheit & Sissy-Erziehung',
      service1Desc: 'Strikte psychologische Kontrolle, Käfig-Aufsicht und vollkommene Unterwerfung für gehorsame Subs und Sissies.',
      service2Title: 'Live-Videoanrufe & Chat-Sessions',
      service2Desc: 'Direkter 1-zu-1-Zugang zu Queen Venia Nyx. Echtzeit-Videodominanz, Live-Aufgaben, Stimmenteasing und intensive Führung.',
      service3Title: 'Schwanzbewertung & Custom Media',
      service3Desc: 'Ehrliche, brutale und demütigende Bewertung deiner Größe, Form und Erbärmlichkeit. Sowie maßgeschneiderte Fetisch-Videos.',
      service4Title: 'Getragene Relikte (Socken, Strumpfhosen, Dessous)',
      service4Desc: 'Physische Duftrelikte und Textilien, direkt auf Queen Venias Haut getragen. Vakuumversiegelt und diskret versandt.',
      processTitle: 'Der Ablauf',
      step1Title: 'Einreichen',
      step1Desc: 'Fülle das detaillierte Buchungsformular aus.',
      step2Title: 'Prüfung',
      step2Desc: 'Ich prüfe innerhalb von 24–48h. Ein sicherer Zahlungslink wird gesendet.',
      step3Title: 'Lieferung',
      step3Desc: 'Die Arbeit beginnt nach Zahlungseingang. Lieferfenster wird mitgeteilt.',

      // Gallery (gallery.html)
      galleryEyebrow: 'Geschützte Galerie',
      galleryTitle: 'Das Archiv',
      galleryLede: 'Ein visuelles Archiv purer Obsession — killer Mimik, hypnotischer Blick, endlose Nylonbeine, spitze Stilettos und sinnlich weiche Füße. Mit Wasserzeichen und nur zur Ansicht.',
      galleryNotice: 'Alle Bilder und Videos sind originale, urheberrechtlich geschützte Werke von <strong>Queen Venia Nyx</strong>. Unerlaubtes Kopieren, Scraping oder Weiterverbreiten ist strengstens untersagt.',
      galleryLoadMore: 'Mehr laden',
      galleryAllLoaded: '✦ Gesamtes Medienarchiv freigeschaltet',

      // Tribute (tribute.html)
      tributeHeroEyebrow: 'Das Allerheiligste',
      tributeHeroTitle: 'Kneel.<br>Submit.<br>Pay.',
      tributeHeroSubtitle: 'Wahre Subs und Fußsklaven wissen bereits, wo ihr Platz ist — auf den Knien, Blick gesenkt, Geldbeutel offen.',
      tributeHeroAction: 'Beweise deinen Wert',
      tributePortalsEyebrow: 'Offizielle Portale',
      tributePortalsTitle: 'Direkter Tribut & Gaben',
      tributePortalsSubtitle: 'Jede Interaktion beginnt mit Unterwerfung. Gib beim Tributen stets deinen Benutzernamen an, damit Queen Venia Nyx dich zuordnen kann.',
      tribute1Desc: 'Direkter Geldtribut an deine Princess. Schnelle, nahtlose Kontoentleerung für gehorsame Simps. Benutzernamen in der Trinkgeld-Nachricht angeben.',
      tribute2Desc: 'Direkte Zahlung und Tribut. Wichtig: Gib deinen Benutzernamen (Telegram/X) im Verwendungszweck an, damit deine Zahlung verifiziert werden kann.',
      tribute3Desc: 'Überhäufe Queen Venia Nyx mit Luxusgeschenken, Outfits und Schuhen. Kaufe direkt von ihrer kuratierten Throne-Wunschliste mit angegebenem Benutzernamen.',
      tribute4Desc: 'Schalte exklusive Clips, private Fotosets und kontinuierlichen monatlichen Tribut-Zugang auf LoyalFans frei.',
      tribute5Desc: 'Direkter Kontakt zu Queen Venia Nyx für verifizierte Tribute und dringende Anfragen.',
      tribute6Desc: 'Tägliche Überlegenheit, Brat-Updates und öffentliche Erniedrigung. Folgen, retweeten und per DM mit deiner Tribut-Bestätigung melden.',
      tributeQuotesTitle: 'Reine Kontrolle'
    }
  };

  function getCurrentLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'de' || saved === 'en') return saved;
    } catch (e) {}
    return 'en';
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    const t = TRANSLATIONS[lang];

    // Helper functions
    const setText = (selector, val) => {
      const el = document.querySelector(selector);
      if (el && val !== undefined) el.textContent = val;
    };
    const setHtml = (selector, val) => {
      const el = document.querySelector(selector);
      if (el && val !== undefined) el.innerHTML = val;
    };
    const setAttr = (selector, attr, val) => {
      const el = document.querySelector(selector);
      if (el && val !== undefined) el.setAttribute(attr, val);
    };

    // Update active button state in all switchers
    document.querySelectorAll('.lang-switcher .lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // 1. Header & Navigation (Common)
    setText('.header-motto', t.headerMotto);
    const desktopNavLinks = document.querySelectorAll('.desktop-nav ul li a');
    if (desktopNavLinks.length >= 5) {
      desktopNavLinks[0].textContent = t.navHome;
      desktopNavLinks[1].textContent = t.navRules;
      desktopNavLinks[2].textContent = t.navGallery;
      desktopNavLinks[3].textContent = t.navTribute;
      desktopNavLinks[4].textContent = t.navBook;
    }

    // 2. Mobile Nav Drawer (Common)
    const drawerLinks = document.querySelectorAll('.nav-drawer nav ul li a');
    if (drawerLinks.length >= 5) {
      drawerLinks[0].textContent = t.navHome;
      drawerLinks[1].textContent = t.navRules;
      drawerLinks[2].textContent = t.navGallery;
      drawerLinks[3].textContent = t.navTribute;
      drawerLinks[4].textContent = t.navBook;
    }

    // 3. Age Gate (Common)
    const ageGatePanel = document.querySelector('.age-gate__panel');
    if (ageGatePanel) {
      const h2 = ageGatePanel.querySelector('h2');
      if (h2) h2.textContent = t.ageGateTitle;
      const paragraphs = ageGatePanel.querySelectorAll('p');
      if (paragraphs.length >= 2) {
        paragraphs[0].textContent = t.ageGateSub;
        paragraphs[1].textContent = t.ageGateDesc;
      }
      const consentEl = document.querySelector('.consent-pill');
      if (consentEl && t.ageGateConsent) consentEl.textContent = t.ageGateConsent;
      setText('[data-age-enter]', t.ageGateEnter);
      setText('[data-age-exit]', t.ageGateExit);
      setHtml('.age-gate__meta', t.ageGateMeta);
    }

    // 4. Mobile Bar (Common)
    const mobileBarBook = document.querySelector('.mobile-bar a[href="book.html"]');
    if (mobileBarBook) mobileBarBook.textContent = t.mobileBarBook;

    // 5. Cookie Banner (Common)
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) {
      setText('#cookie-banner h3', t.cookieTitle);
      setText('#cookie-banner > p', t.cookieDesc);
      setText('[data-cookie-necessary]', t.cookieBtnNec);
      setText('[data-cookie-save]', t.cookieBtnSave);
    }

    // 6. Footer (Common)
    setText('.footer-brand__badge', t.footerBrandBadge);
    setText('.footer-brand__subtitle', t.footerBrandSub);
    const colTitles = document.querySelectorAll('.footer-col__title');
    if (colTitles.length >= 3) {
      colTitles[0].innerHTML = t.footerColNav;
      colTitles[1].innerHTML = t.footerColPortals;
      colTitles[2].innerHTML = t.footerColLegal;
    }
    const footerNavLinks = document.querySelectorAll('.footer-col:nth-of-type(1) .footer-links a span:first-child');
    if (footerNavLinks.length >= 5) {
      footerNavLinks[0].textContent = t.footerLinkHome;
      footerNavLinks[1].textContent = t.footerLinkRules;
      footerNavLinks[2].textContent = t.footerLinkGallery;
      footerNavLinks[3].textContent = t.footerLinkTribute;
      footerNavLinks[4].textContent = t.footerLinkBook;
    }
    const footerLegalLinks = document.querySelectorAll('.footer-col:nth-of-type(3) .footer-links a span:first-child');
    if (footerLegalLinks.length >= 4) {
      footerLegalLinks[0].textContent = t.footerLinkPrivacy;
      footerLegalLinks[1].textContent = t.footerLinkTerms;
      footerLegalLinks[2].textContent = t.footerLinkCookies;
      footerLegalLinks[3].textContent = t.footerLinkNotice;
    }
    setText('.footer-tagline', t.footerTagline);
    setText('.footer-bottom__badge', t.footerBottomBadge);

    // 7. Page-Specific Content

    // A. Home (index.html)
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && document.querySelector('#heroSection')) {
      setText('.hero-content .eyebrow', t.homeEyebrow);
      setText('.hero-title', t.homeTitle);
      setText('.hero-motto', t.homeMotto);
      
      const rotatorItems = document.querySelectorAll('#heroTextRotator .rotator-item');
      if (rotatorItems.length >= 7 && t.rotatorItems) {
        rotatorItems.forEach((item, idx) => {
          if (t.rotatorItems[idx]) item.textContent = t.rotatorItems[idx];
        });
      }

      const heroCtas = document.querySelectorAll('.hero__ctas a');
      if (heroCtas.length >= 2) {
        heroCtas[0].textContent = t.homeBtnBook;
        heroCtas[1].textContent = t.homeBtnRules;
      }

      setText('.about-section .eyebrow', t.aboutEyebrow);
      setText('.about-section h2', t.aboutTitle);
      setText('.bio-quote', t.aboutQuote);
      const bioParas = document.querySelectorAll('.bio-text p');
      if (bioParas.length >= 2) {
        bioParas[0].textContent = t.aboutP1;
        bioParas[1].textContent = t.aboutP2;
      }
    }

    // B. Book (book.html)
    if (window.location.pathname.includes('book.html') || document.getElementById('booking-form')) {
      setText('.page-head .eyebrow', t.bookEyebrow);
      setText('.page-head h1', t.bookTitle);
      
      // Booking Card Masthead & Success
      setText('.booking-card__label', t.bookingCardLabel);
      setText('.booking-card__masthead h3', t.bookingCardTitle);
      setText('.booking-card__masthead p', t.bookingCardDesc);
      setText('.booking-card__badge', t.bookingCardBadge);
      setText('#booking-success h3', t.bookingSuccessH3);
      setText('#booking-success p', t.bookingSuccessP);

      // Booking Form
      const dividers = document.querySelectorAll('.booking-form .form-divider span');
      if (dividers.length >= 3) {
        dividers[0].textContent = t.dividerWho;
        dividers[1].textContent = t.dividerWhat;
        dividers[2].textContent = t.dividerUseful;
      }
      setHtml('label[for="book-name"]', t.labelName);
      setAttr('#book-name', 'placeholder', t.placeholderName);
      setHtml('label[for="book-contact"]', t.labelContact);
      setAttr('#book-contact', 'placeholder', t.placeholderContact);
      setHtml('label[for="book-service"]', t.labelService);
      setHtml('label[for="book-budget"]', t.labelBudget);
      setHtml('label[for="book-platform"]', t.labelPlatform);
      setHtml('label[for="book-details"]', t.labelDetails);
      setAttr('#book-details', 'placeholder', t.placeholderDetails);
      setHtml('.form-check-label span', t.checkboxTerms);

      // Form Select Options
      const serviceSelect = document.getElementById('book-service');
      if (serviceSelect && serviceSelect.options.length >= 7) {
        serviceSelect.options[0].text = t.servicePlaceholder;
        serviceSelect.options[1].text = t.serviceOption1;
        serviceSelect.options[2].text = t.serviceOption2;
        serviceSelect.options[3].text = t.serviceOption3;
        serviceSelect.options[4].text = t.serviceOption4;
        serviceSelect.options[5].text = t.serviceOption5;
        serviceSelect.options[6].text = t.serviceOption6;
      }
      const budgetSelect = document.getElementById('book-budget');
      if (budgetSelect && budgetSelect.options.length >= 7) {
        budgetSelect.options[0].text = t.budgetPlaceholder;
        budgetSelect.options[1].text = t.budgetOption1;
      }

      // Submit Action Buttons
      setHtml('.form-actions button[type="submit"]', t.btnSubmit);
      const formLinks = document.querySelectorAll('.form-actions a');
      if (formLinks.length >= 2) {
        formLinks[0].textContent = t.btnTelegram;
        formLinks[1].textContent = t.btnX;
      }

      // What Happens Next
      setText('#what-happens-next h3', t.whatNextTitle);
      const whatNextItems = document.querySelectorAll('#what-happens-next ul li');
      if (whatNextItems.length >= 4) {
        whatNextItems[0].textContent = t.whatNext1;
        whatNextItems[1].textContent = t.whatNext2;
        whatNextItems[2].textContent = t.whatNext3;
        whatNextItems[3].innerHTML = t.whatNext4;
      }
    }

    // C. Rules (rules.html)
    if (window.location.pathname.includes('rules.html') || document.querySelector('.rules-editorial')) {
      setText('.page-head .eyebrow', t.rulesEyebrow);
      setText('.page-head h1', t.rulesTitle);
      setText('.page-head .lede', t.rulesLede);

      const ruleItems = document.querySelectorAll('.rule-item');
      if (ruleItems.length >= 7) {
        const r1H = ruleItems[0].querySelector('h3'); if (r1H) r1H.textContent = t.rule1Title;
        const r1P = ruleItems[0].querySelector('p'); if (r1P) r1P.textContent = t.rule1Desc;
        const r2H = ruleItems[1].querySelector('h3'); if (r2H) r2H.textContent = t.rule2Title;
        const r2P = ruleItems[1].querySelector('p'); if (r2P) r2P.textContent = t.rule2Desc;
        const r3H = ruleItems[2].querySelector('h3'); if (r3H) r3H.textContent = t.rule3Title;
        const r3P = ruleItems[2].querySelector('p'); if (r3P) r3P.textContent = t.rule3Desc;
        const r4H = ruleItems[3].querySelector('h3'); if (r4H) r4H.textContent = t.rule4Title;
        const r4P = ruleItems[3].querySelector('p'); if (r4P) r4P.textContent = t.rule4Desc;
        const r5H = ruleItems[4].querySelector('h3'); if (r5H) r5H.textContent = t.rule5Title;
        const r5P = ruleItems[4].querySelector('p'); if (r5P) r5P.textContent = t.rule5Desc;
        const r6H = ruleItems[5].querySelector('h3'); if (r6H) r6H.textContent = t.rule6Title;
        const r6P = ruleItems[5].querySelector('p'); if (r6P) r6P.textContent = t.rule6Desc;
        const r7H = ruleItems[6].querySelector('h3'); if (r7H) r7H.textContent = t.rule7Title;
        const r7P = ruleItems[6].querySelector('p'); if (r7P) r7P.textContent = t.rule7Desc;
      }

      // Menu
      const menuSection = document.querySelector('.service-menu');
      if (menuSection) {
        setText('.section-head .eyebrow', t.menuEyebrow);
        setText('.section-head h2', t.menuTitle);
        setText('.section-head .lede', t.menuLede);

        const services = document.querySelectorAll('.service-menu-item');
        if (services.length >= 4) {
          const s1H = services[0].querySelector('h3'); if (s1H) s1H.textContent = t.service1Title;
          const s1P = services[0].querySelector('p'); if (s1P) s1P.textContent = t.service1Desc;
          const s2H = services[1].querySelector('h3'); if (s2H) s2H.textContent = t.service2Title;
          const s2P = services[1].querySelector('p'); if (s2P) s2P.textContent = t.service2Desc;
          const s3H = services[2].querySelector('h3'); if (s3H) s3H.textContent = t.service3Title;
          const s3P = services[2].querySelector('p'); if (s3P) s3P.textContent = t.service3Desc;
          const s4H = services[3].querySelector('h3'); if (s4H) s4H.textContent = t.service4Title;
          const s4P = services[3].querySelector('p'); if (s4P) s4P.textContent = t.service4Desc;
        }

        setText('.booking-timeline h3', t.processTitle);
        const steps = document.querySelectorAll('.timeline-step');
        if (steps.length >= 3) {
          const st1H = steps[0].querySelector('h4'); if (st1H) st1H.textContent = t.step1Title;
          const st1P = steps[0].querySelector('p'); if (st1P) st1P.textContent = t.step1Desc;
          const st2H = steps[1].querySelector('h4'); if (st2H) st2H.textContent = t.step2Title;
          const st2P = steps[1].querySelector('p'); if (st2P) st2P.textContent = t.step2Desc;
          const st3H = steps[2].querySelector('h4'); if (st3H) st3H.textContent = t.step3Title;
          const st3P = steps[2].querySelector('p'); if (st3P) st3P.textContent = t.step3Desc;
        }
      }
    }

    // D. Gallery (gallery.html)
    if (window.location.pathname.includes('gallery.html') || document.getElementById('dynamic-gallery-grid')) {
      setText('.page-head .eyebrow', t.galleryEyebrow);
      setText('.page-head h1', t.galleryTitle);
      setText('.page-head .lede', t.galleryLede);
      setHtml('.gallery-notice p', t.galleryNotice);
      setText('#load-more-btn', t.galleryLoadMore);
      setText('#all-loaded-msg', t.galleryAllLoaded);
    }

    // E. Tribute (tribute.html)
    if (window.location.pathname.includes('tribute.html') || document.querySelector('.tribute-main')) {
      setText('.elite-eyebrow', t.tributeHeroEyebrow);
      setHtml('.elite-title', t.tributeHeroTitle);
      setText('.elite-subtitle', t.tributeHeroSubtitle);
      setText('.elite-hero__actions a', t.tributeHeroAction);

      setText('#tribute-options .eyebrow', t.tributePortalsEyebrow);
      setText('#tribute-options h2', t.tributePortalsTitle);
      setText('#tribute-options p', t.tributePortalsSubtitle);

      const tributeCards = document.querySelectorAll('.tribute-card');
      if (tributeCards.length >= 6) {
        const p1 = tributeCards[0].querySelector('p'); if (p1) p1.textContent = t.tribute1Desc;
        const p2 = tributeCards[1].querySelector('p'); if (p2) p2.textContent = t.tribute2Desc;
        const p3 = tributeCards[2].querySelector('p'); if (p3) p3.textContent = t.tribute3Desc;
        const p4 = tributeCards[3].querySelector('p'); if (p4) p4.textContent = t.tribute4Desc;
        const p5 = tributeCards[4].querySelector('p'); if (p5) p5.textContent = t.tribute5Desc;
        const p6 = tributeCards[5].querySelector('p'); if (p6) p6.textContent = t.tribute6Desc;
      }
      setText('.tribute-quotes-section h2', t.tributeQuotesTitle);
    }

    // Dispatch global event for other components if needed
    window.dispatchEvent(new CustomEvent('princessLeylaLangChanged', { detail: { lang } }));
  }

  function setupLanguageSwitcher() {
    const siteHeader = document.querySelector('.site-header');
    const drawerPanel = document.querySelector('.nav-drawer__panel');

    const createSwitcherElement = () => {
      const div = document.createElement('div');
      div.className = 'lang-switcher';
      div.setAttribute('role', 'group');
      div.setAttribute('aria-label', 'Language Switcher');
      div.innerHTML = `
        <button type="button" class="lang-btn" data-lang="en" aria-label="English">EN</button>
        <span class="lang-sep" aria-hidden="true">/</span>
        <button type="button" class="lang-btn" data-lang="de" aria-label="Deutsch">DE</button>
      `;
      div.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetLang = btn.getAttribute('data-lang');
          applyLanguage(targetLang);
        });
      });
      return div;
    };

    if (siteHeader && !document.querySelector('.site-header .lang-switcher')) {
      let actions = siteHeader.querySelector('.site-header__actions');
      if (!actions) {
        actions = document.createElement('div');
        actions.className = 'site-header__actions';
        const menuBtn = siteHeader.querySelector('.menu-btn');
        if (menuBtn) {
          siteHeader.insertBefore(actions, menuBtn);
          actions.appendChild(createSwitcherElement());
          actions.appendChild(menuBtn);
        } else {
          actions.appendChild(createSwitcherElement());
          siteHeader.appendChild(actions);
        }
      } else {
        actions.insertBefore(createSwitcherElement(), actions.firstChild);
      }
    }

    if (drawerPanel && !document.querySelector('.nav-drawer__panel .lang-switcher')) {
      const drawerWrap = document.createElement('div');
      drawerWrap.className = 'nav-drawer__lang-wrap';
      drawerWrap.appendChild(createSwitcherElement());
      const drawerNav = drawerPanel.querySelector('nav');
      if (drawerNav) {
        drawerPanel.insertBefore(drawerWrap, drawerNav);
      } else {
        drawerPanel.appendChild(drawerWrap);
      }
    }
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupLanguageSwitcher();
      applyLanguage(getCurrentLanguage());
    });
  } else {
    setupLanguageSwitcher();
    applyLanguage(getCurrentLanguage());
  }

  window.PrincessLeylaI18n = {
    applyLanguage,
    getCurrentLanguage,
    translations: TRANSLATIONS
  };
})();
