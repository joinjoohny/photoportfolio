import type { Lang } from "./ui";

export const aboutBody: Record<Lang, string> = {
  en: `
  <p><span class="inline-block py-0.5 text-lg">Hi, I’m Vlada.</span></p>
  <p>I create minimalist portrait photography, working with both digital and film.</p>
  <p>I focus on natural, unposed moments where you simply feel your body and your presence.</p>
  <p>Each photoshoot is a creative space and a form of therapy, where we explore self-acceptance and self-love together.</p>
  <p>If my work resonates with you, it means we’ve found each other. See you soon ❣️</p>
  `,
  de: `
  <p><span class="inline-block py-0.5 text-lg">Hi, ich bin Vlada.</span></p>
  <p>Ich kreiere minimalistische Porträtfotografie und arbeite sowohl digital als auch analog.</p>
  <p>Ich lege den Fokus auf natürliche, ungestellte Momente in denen du deinen Körper und deine Präsenz bewusst wahrnimmst.</p>
  <p>Jedes Shooting ist für mich ein kreativer Raum und eine Form von Therapie, in dem wir gemeinsam Selbstakzeptanz und Selbstliebe erforschen.</p>
  <p>Wenn meine Arbeit dich berührt, haben wir einander gefunden. Bis bald ❣️</p>
  `,
  ru: `
  <p><span class="inline-block py-0.5 text-lg">Привет, я Влада.</span></p>
  <p>Я снимаю портреты в стиле минимализм на цифру и плёнку.</p>
  <p>Мне важны живые кадры  без позирования, где вы просто чувствуете своё тело и ощущения.</p>
  <p>Каждая фотосъёмка для меня это творческое пространство и своего рода терапия, где мы вместе можем исследовать принятие и любовь к себе.</p>
  <p>Если вам откликаются мои работы  значит, мы нашли друг друга. До встречи ❣️</p>
  `,
};

export const bookingTerms: Record<Lang, string> = {
  en: `
  <ul>
    <li>I don’t provide RAW files; they are unfinished material.</li>
    <li>I don’t perform heavy retouching or change appearance — I only remove temporary imperfections (pimples, bruises, scratches).</li>
    <li>I reserve the right to select photos that will be edited and delivered. Re‑edits or changes on request are not performed.</li>
    <li>If you are late to the shoot, the lost time is deducted from the booked session.</li>
    <li>Edited photos are stored for a limited time after delivery. You are responsible for downloading and keeping your files.</li>
    <li>By booking a date, you consent to the use of your photos in my portfolio, social media, and for self‑promotion.</li>
  </ul>
  <p><em>If you don’t want your photos to be published, please let me know before booking.</em></p>
  <ul>
    <li>By booking, you agree with my shooting style and retouching approach, as well as the terms stated here. Please review my portfolio and these rules before booking.</li>
  </ul>
  <h3>Moodboard & Preparation</h3>
  <p>For every shoot, I prepare a <strong>moodboard</strong> — a visual concept for our session. We discuss your wishes and I select suitable references. If you’re unsure about preferences, you can point to examples from my portfolio and I’ll build from there.</p>
  <p>Along with the concept, I give outfit recommendations and attach <em>posing references</em> for us to use during the shoot. I always guide you in the process; references are suggestions, not strict rules.</p>
  `,
  de: `
  <ul>
    <li>RAW‑Dateien stelle ich nicht zur Verfügung; sie gelten als unvollständiges Material.</li>
    <li>Aufwendige Retusche oder Veränderung des Aussehens biete ich nicht an — ich entferne nur vorübergehende Unvollkommenheiten (z. B. Pickel, blaue Flecken, Kratzer).</li>
    <li>Ich behalte mir das Recht vor, die Fotos zur Bearbeitung und Auslieferung selbst auszuwählen. Nachträgliche Änderungen oder Neubereitungen erfolgen nicht.</li>
    <li>Bei Verspätung wird die verlorene Zeit von der gebuchten Session abgezogen.</li>
    <li>Bearbeitete Fotos werden nur für einen begrenzten Zeitraum nach der Übergabe gespeichert. Für das Herunterladen und die Aufbewahrung bist du verantwortlich.</li>
    <li>Mit der Buchung stimmst du der Nutzung deiner Fotos in meinem Portfolio, in sozialen Netzwerken und zu Werbezwecken zu.</li>
  </ul>
  <p><em>Wenn du keine Veröffentlichung deiner Fotos möchtest, gib mir bitte vor der Buchung Bescheid.</em></p>
  <ul>
    <li>Mit der Buchung akzeptierst du meinen Stil und meinen Retusche‑Ansatz sowie die hier aufgeführten Bedingungen. Bitte sieh dir vorab mein Portfolio und diese Regeln an.</li>
  </ul>
  <h3>Moodboard & Vorbereitung</h3>
  <p>Für jedes Shooting erstelle ich ein <strong>Moodboard</strong> — ein visuelles Konzept. Wir besprechen deine Wünsche und ich wähle passende Referenzen. Wenn du unsicher bist, kannst du auf Beispiele in meinem Portfolio verweisen.</p>
  <p>Neben dem Konzept gebe ich Outfit‑Empfehlungen und <em>Posing‑Referenzen</em>, auf die wir während des Shootings zurückgreifen können. Ich begleite dich immer im Prozess; die Referenzen sind Vorschläge, keine strengen Regeln.</p>
  `,
  ru: `
  <ul>
    <li>Я не предоставляю исходные файлы (RAW), так как это незаконченный материал.</li>
    <li>Я не выполняю глубокую ретушь и не меняю внешность — удаляю только временные недостатки (прыщи, синяки, царапины).</li>
    <li>Я оставляю за собой право выбора фотографий, которые будут обработаны и переданы. Повторная обработка или изменения по запросу не выполняются.</li>
    <li>В случае опоздания на съёмку потерянное время вычитается из оплаченной сессии.</li>
    <li>Обработанные фотографии хранятся ограниченное время после передачи. Ответственность за загрузку и хранение файлов лежит на клиенте.</li>
    <li>Бронируя дату, вы даёте согласие на использование ваших фотографий в моём портфолио, социальных сетях и для продвижения.</li>
  </ul>
  <p><em>Если вы не хотите публикации фотографий, пожалуйста, сообщите об этом до бронирования.</em></p>
  <ul>
    <li>Бронируя дату, вы соглашаетесь с моим стилем и подходом к ретуши, а также с условиями, изложенными здесь. Пожалуйста, ознакомьтесь с портфолио и этими правилами до бронирования.</li>
  </ul>
  <h3>Мудборд и подготовка</h3>
  <p>Для каждой съёмки я составляю <strong>мудборд</strong> — визуальную концепцию. Мы обсуждаем ваши пожелания, и я подбираю подходящие референсы. Если вы затрудняетесь с пожеланиями, можно оттолкнуться от примеров в моём портфолио.</p>
  <p>Помимо концепции, я даю рекомендации по образам и прикрепляю <em>референсы по позированию</em>, чтобы мы могли пользоваться ими во время съёмки. Я всегда направляю в процессе; референсы — рекомендательные.</p>
  `,
};

type SvcKey = "elle" | "vogue" | "allure" | "numero" | "essence";

export const services: Record<
  Lang,
  Record<SvcKey, { title: string; body: string }>
> = {
  en: {
    elle: {
      title: "Individual Shoot",
      body: `
      <p><strong>Price:</strong> 70&nbsp;€ / 1 hour. I allow a bit more time because we may move between locations during the session.</p>
      <p><strong>Duration: </strong>~1–1.5 hours (outdoors / home / nature / studio or hotel*)</p>
      <ul>
        <li>Pre‑shoot consultation</li>
        <li>3–5 short videos for social media and Reels</li>
        <li>Selection of images and locations; creation of a personal <em>moodboard</em></li>
        <li>30–40 photos with my editing</li>
        <li>Ready within 7–14 business days</li>
      </ul>
      <p><em>(*Studio cost not included.)</em></p>
      <h3>Each session includes</h3>
      <ul>
        <li>Preliminary talk about the shoot plan</li>
        <li>Ideas, location and outfit guidance</li>
        <li>Shooting according to the chosen time</li>
      </ul>
      `,
    },
    vogue: {
      title: "Content (photo / video)",
      body: `
      <h3>Phone‑based content shoot</h3>
      <ul>
        <li><strong>One‑off:</strong> 1 hour / iPhone — <strong>30&nbsp;€</strong></li>
        <li><strong>Monthly subscription:</strong> 3 shoots — <strong>75&nbsp;€</strong></li>
      </ul>
      <p><strong>Consultation before the shoot</strong>, choosing the place and discussing all details on how to prepare content in an urban style. The monthly pack lets you work with me for 1 month, during which we will have <strong>3 meetings/shoots</strong> to create unique, personal content for social media. This way you have “endless content” and save time on most details.</p>
      <h3>Each session includes</h3>
      <ul>
        <li>Preliminary talk about the shoot plan</li>
        <li>Ideas, location and outfit guidance</li>
        <li>Shooting according to the chosen time</li>
      </ul>
      `,
    },
    allure: {
      title: "Film Photoshoot",
      body: `
      <p><strong>Price:</strong> 80&nbsp;€</p>
      <p><strong>Duration:</strong> 1 hour</p>
      <p><strong>Includes:</strong></p>
      <ul>
        <li>Location choice, discussing details and looks</li>
        <li>One roll of film, development and scanning <em>(included)</em></li>
        <li>Posing assistance, preparation of references</li>
        <li>Shooting outdoors (agreed location) or in a studio</li>
      </ul>
      <p><strong>Result:</strong> 36 photos</p>
      <p><strong>Ready in:</strong> 10–15 business days</p>
      <h3>Each session includes</h3>
      <ul>
        <li>Preliminary talk about the shoot plan</li>
        <li>Ideas, location and outfit guidance</li>
        <li>Shooting according to the chosen time</li>
      </ul>
      `,
    },
    numero: {
      title: "Couple/Family",
      body: `
      <p><strong>Duration:</strong> 1 hour</p>
      <p><strong>Price:</strong> 70&nbsp;€</p>
      <ul>
        <li>Pre‑shoot consultation</li>
        <li>Choosing location and shot ideas; discussing all details</li>
        <li>Creating a personal <em>moodboard</em> for the session</li>
        <li>30–40 photos with my editing</li>
        <li>Ready within 10–12 business days</li>
        <li>Support and help with ideas, locations and outfits</li>
      </ul>
      <h3>Each session includes</h3>
      <ul>
        <li>Preliminary talk about the shoot plan</li>
        <li>Ideas, location and outfit guidance</li>
        <li>Shooting according to the chosen time</li>
      </ul>
      `,
    },
    essence: {
      title: "Gift Certificate",
      body: `
      <p>
        The shoot can take place <strong>outdoors, at home, in nature, in a studio or hotel*</strong>.
      </p>

      <p><strong>Result:</strong> at least 40 edited photos</p>
      <p><strong>Ready in:</strong> 7–14 days (depending on the season)</p>

      <p>
        The gift certificate is valid for <strong>6 months</strong> and can be used in <strong>Dresden, Leipzig or Berlin</strong>.
      </p>

      <h3>Available in two formats:</h3>
      <ul>
        <li><strong>PDF</strong> — for self‑printing</li>
        <li><strong>Paper version</strong> — in person or by post</li>
      </ul>

      <p><em>*Studio or hotel rental cost is not included in the voucher price.</em></p>
      `,
    },
  },
  de: {
    elle: {
      title: "Einzelshooting",
      body: `
      <p><strong>Preis:</strong> 70&nbsp;€ / 1 Stunden. Ich plane etwas mehr Zeit ein, da wir während des Shootings zwischen Locations wechseln können.</p>
      <p><strong>Dauer: </strong>~1–1,5 Stunden (Outdoor / Zuhause / Natur / Studio oder Hotel*)</p>
      <ul>
        <li>Vorgespräch vor dem Shooting</li>
        <li>3–5 kurze Videos für Social Media und Reels</li>
        <li>Auswahl der Motive und Locations; persönliches <em>Moodboard</em></li>
        <li>30–40 Fotos in meinem Look</li>
        <li>Fertig in 7–14 Werktagen</li>
      </ul>
      <p><em>(*Studiokosten nicht inbegriffen.)</em></p>
      <h3>Jede Session enthält</h3>
      <ul>
        <li>Vorgespräch zum Ablauf der Session</li>
        <li>Unterstützung bei Idee, Location und Outfits</li>
        <li>Shooting entsprechend der gewählten Zeit</li>
      </ul>
      `,
    },
    vogue: {
      title: "Content (Foto / Video)",
      body: `
      <h3>Content‑Shooting mit dem Telefon</h3>
      <ul>
        <li><strong>Einzel:</strong> 1 Stunden / iPhone — <strong>30&nbsp;€</strong></li>
        <li><strong>Monats‑Abo:</strong> 3 Shootings — <strong>75&nbsp;€</strong></li>
      </ul>
      <p><strong>Vorgespräch vor dem Shooting</strong>, Wahl des Ortes und Besprechung aller Details, wie man sich für Content im urbanen Stil vorbereitet. Mit dem Monatspaket arbeiten wir 1 Monat zusammen und haben <strong>3 Treffen/Shootings</strong>, in denen ich einzigartigen, persönlichen Content für Social Media erstelle. So hast du „endlosen Content“ und sparst Zeit bei vielen Details.</p>
      <h3>Jede Session enthält</h3>
      <ul>
        <li>Vorgespräch zum Ablauf der Session</li>
        <li>Unterstützung bei Idee, Location und Outfits</li>
        <li>Shooting entsprechend der gewählten Zeit</li>
      </ul>
      `,
    },
    allure: {
      title: "Film‑Fotoshooting",
      body: `
      <p><strong>Preis:</strong> 80&nbsp;€</p>
      <p><strong>Dauer:</strong> 1 Stunden</p>
      <p><strong>Enthalten:</strong></p>
      <ul>
        <li>Wahl des Ortes, Details und Look‑Besprechung</li>
        <li>Eine Filmrolle, Entwicklung und Scan <em>(inklusive)</em></li>
        <li>Posing‑Hilfe, Vorbereitung von Referenzen</li>
        <li>Shooting outdoor (abgesprochene Location) oder im Studio</li>
      </ul>
      <p><strong>Ergebnis:</strong> 36 Fotos</p>
      <p><strong>Bereit in:</strong> 10–15 Werktagen</p>
      <h3>Jede Session enthält</h3>
      <ul>
        <li>Vorgespräch zum Ablauf der Session</li>
        <li>Unterstützung bei Idee, Location und Outfits</li>
        <li>Shooting entsprechend der gewählten Zeit</li>
      </ul>
      `,
    },
    numero: {
      title: "Paar/Familie",
      body: `
      <p><strong>Dauer:</strong> 1 Stunden</p>
      <p><strong>Preis:</strong> 70&nbsp;€</p>
      <ul>
        <li>Vorgespräch vor dem Shooting</li>
        <li>Wahl der Location und Motive; Besprechung aller Details</li>
        <li>Erstellung eines persönlichen <em>Moodboards</em></li>
        <li>30–40 Fotos in meinem Look</li>
        <li>Bereit in 10–12 Werktagen</li>
        <li>Unterstützung und Hilfe bei Ideen, Locations und Outfits</li>
      </ul>
      <h3>Jede Session enthält</h3>
      <ul>
        <li>Vorgespräch zum Ablauf der Session</li>
        <li>Unterstützung bei Idee, Location und Outfits</li>
        <li>Shooting entsprechend der gewählten Zeit</li>
      </ul>
      `,
    },
    essence: {
      title: "Gutschein",
      body: `
      <p>
        Das Shooting kann <strong>Outdoor, zu Hause, in der Natur, im Studio oder Hotel*</strong> stattfinden.
      </p>

      <p><strong>Ergebnis:</strong> mindestens 40 bearbeitete Fotos</p>
      <p><strong>Bereit in:</strong> 10–21 Tagen (abhängig von der Saison)</p>

      <p>
        Der Gutschein ist <strong>6 Monate</strong> gültig und kann in <strong>Dresden, Leipzig oder Berlin</strong> eingelöst werden.
      </p>

      <h3>Erhältlich in zwei Formaten:</h3>
      <ul>
        <li><strong>PDF</strong> — zum selbst Ausdrucken</li>
        <li><strong>Papier‑Variante</strong> — bei persönlicher Übergabe oder per Postversand</li>
      </ul>

      <p><em>*Die Miete für Fotostudio oder Hotel ist nicht im Gutscheinpreis enthalten.</em></p>
      `,
    },
  },
  ru: {
    elle: {
      title: "Индивидуальная съёмка",
      body: `
      <p><strong>Продолжительность:</strong> 1 час</p>
      <p><strong>Стоимость:</strong> 70&nbsp;€</p>

      <p>
        Съёмка может проходить <strong>на улице, дома, в природе, студии или отеле</strong>
        (<em>стоимость студии оплачивается отдельно</em>). 
        Я закладываю немного дополнительного времени, чтобы спокойно перемещаться между локациями и не спешить.
      </p>

      <h3>Включено в съёмку:</h3>
      <ul>
        <li>Предварительная консультация и обсуждение идеи</li>
        <li>Подбор локаций, помощь с образами и позированием</li>
        <li>Создание личного <em>moodboard</em></li>
        <li>30–40 отредактированных фотографий</li>
        <li>3–5 коротких видео для Reels и социальных сетей</li>
        <li>Готовые фотографии в течение 7–14&nbsp;рабочих&nbsp;дней</li>
      </ul>
      `,
    },
    vogue: {
      title: "Создание контента (фото / видео)",
      body: `
      <h3>Контент‑съёмка на телефон</h3>
      <ul>
        <li><strong>Разовая съёмка:</strong> 1 час / iPhone — <strong>30&nbsp;€</strong></li>
        <li><strong>Абонемент на месяц:</strong> 3 съёмки — <strong>75&nbsp;€</strong></li>
      </ul>
      <p><strong>Консультация перед съёмкой</strong>, выбор места и обсуждение всех деталей того, как правильно подготовиться к съёмке контента в уличном стиле. Ежемесячный пакет позволяет сотрудничать со мной в течение 1 месяца, в течение которого у нас будет <strong>3 встречи/съёмки</strong>, где я создаю уникальный личный контент по индивидуальному запросу для социальных сетей. Таким образом, у вас есть «бесконечный контент», и вы экономите время на большинстве деталей.</p>
      <h3>Каждая съёмка включает</h3>
      <ul>
        <li>Предварительный разговор о плане нашей съёмки</li>
        <li>Предложения и помощь по идее, местам и нарядам</li>
        <li>Фотосессия в соответствии с выбранным временем</li>
      </ul>
      `,
    },
    allure: {
      title: "Плёночная съёмка",
      body: `
      <p><strong>Стоимость съёмки:</strong> 80&nbsp;€</p>
      <p><strong>Продолжительность:</strong> 1 час</p>
      <p><strong>Что входит:</strong></p>
      <ul>
        <li>Выбор места, обсуждение деталей и образа</li>
        <li>Катушка плёнки, проявка и отцифровка <em>(входит в стоимость)</em></li>
        <li>Помощь в позировании, подготовка референсов</li>
        <li>Съёмка на улице (по согласованной локации) или в студии</li>
      </ul>
      <p><strong>Результат:</strong> 36 фото</p>
      <p><strong>Срок готовности:</strong> 10-15 рабочих дней</p>
      <h3>Каждая съёмка включает</h3>
      <ul>
        <li>Предварительный разговор о плане нашей съёмки</li>
        <li>Предложения и помощь по идее, местам и нарядам</li>
        <li>Фотосессия в соответствии с выбранным временем</li>
      </ul>
      `,
    },
    numero: {
      title: "Пара/Семья",
      body: `
    <p><strong>Продолжительность:</strong> 1 час</p>
    <p><strong>Стоимость:</strong> 70&nbsp;€</p>

    <p>
      Съёмка может проходить <strong>на улице, дома, в природе, студии или отеле</strong>
      (<em>стоимость студии оплачивается отдельно</em>).
      Я закладываю немного дополнительного времени, чтобы спокойно перемещаться между локациями и не спешить.
    </p>

    <h3>Включено в съёмку:</h3>
    <ul>
      <li>Консультация перед съёмкой</li>
      <li>Подбор идей и мест для съёмки</li>
      <li>Создание персонального <em>moodboard</em></li>
      <li>30–40 фотографий в индивидуальном редактировании</li>
      <li>Готовые фотографии в течение 10–12&nbsp;рабочих&nbsp;дней</li>
      <li>Поддержка и помощь с идеями, локациями и образами</li>
    </ul>
      `,
    },
    essence: {
      title: "Подарочный сертификат 💌",
      body: `
        <p>
          Съёмка может проходить <strong>на улице, дома, в природе, студии или отеле*</strong>.
        </p>

        <p><strong>Результат:</strong> минимум 40&nbsp;обработанных фотографий</p>
        <p><strong>Срок готовности:</strong> 7–14&nbsp;дней (в зависимости от сезона)</p>

        <p>
          Подарочный сертификат действует в течение <strong>6&nbsp;месяцев</strong> 
          и может быть использован на территории <strong>Дрездена, Лейпцига или Берлина</strong>.
        </p>

        <h3>Доступен в двух форматах:</h3>
        <ul>
          <li><strong>PDF</strong> — для самостоятельной печати</li>
          <li><strong>Бумажный вариант</strong> — при личной встрече или отправке по почте</li>
        </ul>

        <p><em>*Стоимость аренды фотостудии или отеля не входит в цену сертификата.</em></p>
      `,
    },
  },
};
