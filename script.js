
/* وجهة نظر | Viewpoint — Vanilla JavaScript */
"use strict";

const gameData = {
  perspective: {
    name: "وجهة نظرك", icon: "💭", isChallenge: false,
    description: "أسئلة تفتح نقاشات وتكشف اختلافاتكم الجميلة.",
    questions: [
    "من وجهة نظرك، شنو الشي اللي يخلي العلاقة مريحة وآمنة؟",
    "من وجهة نظرك، شلون نعرف أن الطرف الثاني يسمعنا بصدق؟",
    "من وجهة نظرك، شنو الفرق بين الحب والتعلّق؟",
    "من وجهة نظرك، شكد مهم يكون لكل شخص وقت خاص بيه؟",
    "من وجهة نظرك، شنو أفضل طريقة لحل الخلاف؟",
    "من وجهة نظرك، الاعتذار الحقيقي شنو لازم يتضمن؟",
    "من وجهة نظرك، شلون نعبّر عن الزعل بدون ما نجرح؟",
    "من وجهة نظرك، شنو التصرف الصغير اللي يقوّي العلاقة؟",
    "من وجهة نظرك، شلون تتوزع المسؤوليات بين الشريكين؟",
    "من وجهة نظرك، شنو معنى الثقة بالعلاقة؟",
    "من وجهة نظرك، هل الصراحة لازم تكون بكل التفاصيل؟ وليش؟",
    "من وجهة نظرك، شلون نحافظ على الرومانسية مع مرور الوقت؟",
    "من وجهة نظرك، شنو حدود المزاح المقبولة بين الشريكين؟",
    "من وجهة نظرك، شنو أفضل طريقة لدعم الشريك بوقت الضغط؟",
    "من وجهة نظرك، شنو الشي اللي يخلي الحوار يتحول إلى جدال؟",
    "من وجهة نظرك، شكد مهم نتفق على الأهداف المستقبلية؟",
    "من وجهة نظرك، شلون نتصرف إذا اختلفت وجهات نظرنا؟",
    "من وجهة نظرك، شنو معنى الاهتمام بالنسبة إلك؟",
    "من وجهة نظرك، هل الحب وحده يكفي لاستمرار العلاقة؟",
    "من وجهة نظرك، شلون نبني حدود صحية ويا الآخرين؟",
    "من وجهة نظرك، شنو أفضل طريقة للتعامل ويا الغيرة؟",
    "من وجهة نظرك، شنو اللي يخلي الشخص يحس أنه مفهوم؟",
    "من وجهة نظرك، شنو أهمية الضحك والمزاح بالعلاقة؟",
    "من وجهة نظرك، شلون نطلب احتياجاتنا بدون لوم؟",
    "من وجهة نظرك، شنو التصرف اللي يرمم الثقة بعد خطأ؟",
    "من وجهة نظرك، شلون نحتفل بنجاحات بعض؟",
    "من وجهة نظرك، شكد مهم نتذكر التفاصيل الصغيرة؟",
    "من وجهة نظرك، شنو أفضل طريقة للتعامل مع الصمت؟",
    "من وجهة نظرك، شنو معنى الشراكة الحقيقية؟",
    "من وجهة نظرك، شلون نعرف أن الخلاف يحتاج استراحة؟",
    "من وجهة نظرك، شنو دور العائلة في قرارات الشريكين؟",
    "من وجهة نظرك، شلون نختلف باحترام؟",
    "من وجهة نظرك، شنو أهم قيمة لازم تكون مشتركة بين الشريكين؟",
    "من وجهة نظرك، شنو الشي اللي يخلي البيت مكان مريح؟",
    "من وجهة نظرك، شلون نواجه سوء الفهم بسرعة؟",
    "من وجهة نظرك، هل الأفضل نحل المشكلة فوراً لو نهدأ أولاً؟",
    "من وجهة نظرك، شنو معنى الوفاء بالأفعال؟",
    "من وجهة نظرك، شلون نساند بعض بدون ما نفرض حلول؟",
    "من وجهة نظرك، شنو الفرق بين الخصوصية والسرية؟",
    "من وجهة نظرك، شنو أهم شي نتعلمه من خلافاتنا؟",
    "من وجهة نظرك، شلون نوزع وقتنا بين العلاقة والأصدقاء؟",
    "من وجهة نظرك، شنو اللي يخلي الكلام وقت الزعل مؤذياً؟",
    "من وجهة نظرك، شلون نحافظ على الاحترام حتى وقت الغضب؟",
    "من وجهة نظرك، شنو أفضل طريقة لمناقشة المصاريف؟",
    "من وجهة نظرك، شلون نتعامل مع اختلاف العادات؟",
    "من وجهة نظرك، شنو معنى أن نكون فريقاً واحداً؟",
    "من وجهة نظرك، شنو التصرف اللي يبين التقدير؟",
    "من وجهة نظرك، شلون نتعامل مع التوقعات غير المعلنة؟",
    "من وجهة نظرك، شنو أفضل طريقة لاتخاذ قرار مشترك؟",
    "من وجهة نظرك، شنو الشي اللي يستحق نعتذر عنه حتى لو ما قصدناه؟",
    "من وجهة نظرك، شلون نفرّق بين النصيحة والسيطرة؟",
    "من وجهة نظرك، شنو أهمية الاستماع بدون مقاطعة؟",
    "من وجهة نظرك، شلون نخلي العلاقة تنمو بدل ما تبقى بمكانها؟",
    "من وجهة نظرك، شنو الشي اللي ما يصير نستهين بمشاعر الطرف الثاني بيه؟",
    "من وجهة نظرك، شنو معنى الدعم العاطفي؟",
    "من وجهة نظرك، شلون نتعامل مع اختلاف طريقة التعبير عن الحب؟",
    "من وجهة نظرك، شنو أفضل طريقة لتجديد الروتين؟",
    "من وجهة نظرك، شنو حدود مشاركة تفاصيل العلاقة مع الأصدقاء؟",
    "من وجهة نظرك، شلون نتصرف إذا واحد منّا احتاج مساحة؟",
    "من وجهة نظرك، شنو اللي يخلي النقاش عادلاً للطرفين؟",
    "من وجهة نظرك، شنو أهمية الوفاء بالوعود الصغيرة؟",
    "من وجهة نظرك، شلون نحل مشكلة تتكرر كل مرة؟",
    "من وجهة نظرك، شنو معنى النضج العاطفي؟",
    "من وجهة نظرك، شنو أفضل طريقة لقول «لا» باحترام؟",
    "من وجهة نظرك، شلون نساند طموح بعض؟",
    "من وجهة نظرك، شنو الشي اللي يخلي الثقة تكبر مع الوقت؟",
    "من وجهة نظرك، شلون نتعامل مع اختلاف الاحتياجات؟",
    "من وجهة نظرك، شنو أهمية التعبير عن الامتنان؟",
    "من وجهة نظرك، شلون نعرف أن المزاح تجاوز حدوده؟",
    "من وجهة نظرك، شنو أفضل طريقة للتصالح بعد خلاف؟",
    "من وجهة نظرك، شنو الشي اللي لازم نتفق عليه قبل خطوة جدية؟",
    "من وجهة نظرك، شلون نوازن بين العفوية والتخطيط؟",
    "من وجهة نظرك، شنو معنى الالتزام اليومي بالعلاقة؟",
    "من وجهة نظرك، شلون نواجه موضوعاً حساساً بدون خوف؟",
    "من وجهة نظرك، شنو الشي اللي يساعدنا نفهم لغة حب بعض؟",
    "من وجهة نظرك، شنو أهمية تشجيع بعض بدل المقارنة؟",
    "من وجهة نظرك، شلون نتعامل مع يوم سيئ لأحدنا؟",
    "من وجهة نظرك، شنو اللي يخلي الهدية معنوية حتى لو بسيطة؟",
    "من وجهة نظرك، شنو حدود استخدام الهاتف أثناء وقتنا سوا؟",
    "من وجهة نظرك، شلون نناقش اختلافاً بالقيم؟",
    "من وجهة نظرك، شنو أفضل طريقة لإعادة فتح حوار توقف؟",
    "من وجهة نظرك، شنو معنى أن يشعر كل طرف بأنه مُقدَّر؟",
    "من وجهة نظرك، شلون نعرف متى نحتاج مساعدة مختص بالعلاقة؟",
    "من وجهة نظرك، شنو اللي يخلي الذكريات المشتركة مميزة؟",
    "من وجهة نظرك، شلون نواجه الخوف من التغيير سوا؟",
    "من وجهة نظرك، شنو أفضل طريقة لمشاركة الأخبار الصعبة؟",
    "من وجهة نظرك، شنو أهمية المرونة بالتفاهم؟",
    "من وجهة نظرك، شلون نمنع المقارنة بعلاقات الآخرين؟",
    "من وجهة نظرك، شنو الشي اللي يخلينا نرجع لبعض بعد يوم متعب؟",
    "من وجهة نظرك، شلون نتعامل مع اختلاف أساليب الترتيب والنظافة؟",
    "من وجهة نظرك، شنو معنى الاحترام أمام الناس وبالخصوص؟",
    "من وجهة نظرك، شنو الشي اللي لازم يبقى خاصاً بين الشريكين؟",
    "من وجهة نظرك، شلون نعبّر عن احتياجنا للاهتمام؟",
    "من وجهة نظرك، شنو أفضل طريقة لتقسيم الأعمال اليومية؟",
    "من وجهة نظرك، شلون نحتوي بعض وقت القلق؟",
    "من وجهة نظرك، شنو معنى أن نختار بعض كل يوم؟",
    "من وجهة نظرك، شنو أهم سؤال لازم نسأله لبعض بالمستقبل؟",
    "من وجهة نظرك، شنو عادة بسيطة تتمنى نبنيها سوا؟",
    "من وجهة نظرك، شنو أكثر شيء يحافظ على صداقة الشريكين؟",
    "من وجهة نظرك، شنو الوعد الواقعي اللي نكدر نلتزم بيه لبعض؟"
]
  },
  deep: {
    name: "صراحة وعمق", icon: "🔥", isChallenge: false,
    description: "أسئلة صادقة ورومانسية تقرّب المسافة بين القلوب.",
    questions: [
    "شنو أكثر شي تخاف تخسره بعلاقتنا؟",
    "متى حسّيت أني فهمتك بدون ما تشرح؟",
    "شنو ذكرى بيناتنا ترجعلك ابتسامة كلما تتذكرها؟",
    "شنو الشي اللي تتمنى ألاحظه أكثر بتصرفاتك؟",
    "شنو أكثر موقف خلاك تحس بالأمان وياي؟",
    "شنو كلمة تتمنى تسمعها مني أكثر؟",
    "شنو الشي اللي يصعب عليك التعبير عنه؟",
    "متى تحس أني قريب منك عاطفياً؟",
    "شنو أكثر صفة تحبها بشخصيتي؟",
    "شنو جانب من شخصيتك تتمنى أفهمه بصورة أعمق؟",
    "شنو أجمل تفصيل صغير تتذكره عن أول أيامنا؟",
    "شنو الشي اللي يخليك تحس بالتقدير؟",
    "إذا نكدر نعيد يوم واحد سوا، أي يوم تختار؟",
    "شنو أكثر شي تعلمته عن نفسك من علاقتنا؟",
    "شنو موقف تتمنى لو تعاملت وياه بطريقة مختلفة؟",
    "شنو معنى الحب بالنسبة إلك هالفترة؟",
    "شنو الشي اللي يطمّنك من تكون متضايق؟",
    "شنو أكثر شيء يجرحك حتى لو كان بسيطاً؟",
    "شنو موضوع تتمنى نحچي عنه بهدوء أكثر؟",
    "شنو الشي اللي يخليك تضحك من قلبك وياي؟",
    "شنو أكثر تصرف يحسسك أني أختارك؟",
    "شنو حلم شخصي تتمنى أساندك بيه؟",
    "شنو نوع الاهتمام اللي يوصل لقلبك بسرعة؟",
    "شنو الشي اللي تغير بنظرتك للحب مع الوقت؟",
    "شنو أكثر مجاملة مني بقت ببالك؟",
    "شنو موقف حسّيت بيه بالفخر إلي أو بينا؟",
    "شنو الشي اللي تتمنى نسويه لأول مرة سوا؟",
    "شنو خوف صغير نكدر نخففه عن بعض؟",
    "شنو عادة عندي تشوفها لطيفة؟",
    "شنو الشي اللي تحب أسويه لما تكون ساكت؟",
    "شنو أكثر شيء تحتاجه مني بأيام الضغط؟",
    "شنو الشي اللي تتمنى نتركه من الماضي؟",
    "شنو ذكرى بسيطة بس غالية عليك؟",
    "شنو جانب من علاقتنا تريد نحافظ عليه دائماً؟",
    "شنو الشي اللي تحس ما أقدّره كفاية؟",
    "شنو أكثر مرة حسّيت أني فخور بيك؟",
    "شنو سؤال تخاف تسأله لأنك تخاف من جوابه؟",
    "شنو أكثر شيء يخليك تثق بشخص؟",
    "شنو معنى الاعتذار بالنسبة إلك؟",
    "شنو الشي اللي تتمنى أتعلمه عن طريقة تفكيرك؟",
    "شنو أكثر شيء يجذبك بالحوار وياي؟",
    "شنو موقف غيّر نظرتك إلي للأفضل؟",
    "شنو الشي اللي تحب نحتفل بيه أكثر؟",
    "شنو نوع المفاجآت اللي تفرحك؟",
    "شنو الشي اللي يساعدك ترجع هادئ بعد الزعل؟",
    "شنو أكثر شيء تتمنى ننجزه سوا؟",
    "شنو حدودك اللي تحب أحترمها دائماً؟",
    "شنو الشي اللي تتمنى تسامح نفسك عليه؟",
    "شنو موقف حسّيت بيه أني كنت سند إلك؟",
    "شنو صفة تتمنى نطوّرها سوا؟",
    "شنو الشي اللي يخليك تحس أنك مسموع؟",
    "شنو أكثر شيء يسببلك سوء فهم بالعلاقات؟",
    "شنو معنى الوفاء عندك بعيداً عن الكلام؟",
    "شنو الشي اللي تريدني أسألك عنه أكثر؟",
    "شنو أكثر موقف ضحكنا بيه لحد ما تعبنا؟",
    "شنو تصرف بسيط ممكن يحسّن يومك؟",
    "شنو أكثر شيء تقدّره بعلاقتنا حالياً؟",
    "شنو الشي اللي تريد يصير أسهل بيناتنا؟",
    "شنو جانب من طفولتك تحب تحچيلي عنه؟",
    "شنو درس مهم تعلمته من تجربة صعبة؟",
    "شنو الشي اللي يخلّيك تحس بالقرب حتى لو كنا بعيدين؟",
    "شنو أكثر شيء تحبه بطريقة اهتمامي؟",
    "شنو أمنية تتمنى نحققها خلال السنة الجاية؟",
    "شنو الشي اللي تتمنى ما يتغير بيناتنا؟",
    "شنو الشي اللي يخليك تحتاج وقت وحدك؟",
    "شنو أفضل طريقة أساندك بيها بدون ما أضغط عليك؟",
    "شنو شيء جديد اكتشفته عني مؤخراً؟",
    "شنو أكثر شيء يعبّر عن شخصيتك الحقيقية؟",
    "شنو موقف تتمنى أكون موجود بيه وياك بالمستقبل؟",
    "شنو الشي اللي تتمنى نكون أكثر صراحة بيه؟",
    "شنو أكثر شيء تحبه بطريقة اختلافنا؟",
    "شنو معنى الأمان العاطفي عندك؟",
    "شنو لحظة حسّيت بيها أن علاقتنا نضجت؟",
    "شنو أكثر شيء تتمنى أشكرك عليه؟",
    "شنو تصرف يخليك تحس أن رأيك مهم؟",
    "شنو شيء بسيط يذكرك بيه خلال يومك؟",
    "شنو أكثر شيء تريد نضحك عليه أكثر؟",
    "شنو تجربة جديدة تحب نخوضها سوا؟",
    "شنو الشي اللي يخلّيك تحس بالغيرة، وشلون تحب نتعامل وياه؟",
    "شنو أكثر شيء تعلمته من خلاف صار بيناتنا؟",
    "شنو الشي اللي تتمنى أكون أكثر تفهماً إله؟",
    "شنو هدف تتمنى نساعد بعض على تحقيقه؟",
    "شنو أكثر شيء يخلّيك تحس بالامتنان إلي؟",
    "شنو تفصيل بعلاقتنا ما يعرفه غيرنا؟",
    "شنو عادة تحب تكون جزءاً من يومنا؟",
    "شنو الشي اللي يخليك تحس أني أسمعك فعلاً؟",
    "شنو أصعب نوع من الاعتذار بالنسبة إلك؟",
    "شنو أكثر شيء يخليك تحس بالقرب مني؟",
    "شنو شيء كنت تتردد تحچيلي عنه وبعدين ارتحت؟",
    "شنو الشي اللي تتمنى نكون أهدأ بالتعامل وياه؟",
    "شنو أكثر صفة اكتسبتها أو طورتها بعلاقتنا؟",
    "شنو ذكرى تتمنى نعيد إحساسها مو بالضرورة نفس تفاصيلها؟",
    "شنو الشي اللي تحب أمدحك عليه أكثر؟",
    "شنو معنى الدعم بالنسبة إلك وقت الفشل؟",
    "شنو شيء تتمنى نتعلمه عن بعض خلال الفترة الجاية؟",
    "شنو السؤال اللي تحب أجاوبك عنه بصراحة؟",
    "شنو الشي اللي يخليك تختار الاستمرار بالحوار حتى لو صعب؟",
    "شنو وعد صغير تقدر تقدمه لعلاقتنا من قلبك؟",
    "شنو الشي اللي تتمنى أحتفل بيه وياك حتى لو الناس تشوفه إنجازاً بسيطاً؟",
    "إذا نريد نخلي علاقتنا أقوى بخطوة واحدة هذا الأسبوع، شنو تقترح؟"
]
  },
  challenge: {
    name: "التحديات والنار", icon: "⚡", isChallenge: true,
    description: "تحديات لطيفة وممتعة تضيف ضحكة للّحظة.",
    questions: [
    "انظر بعين شريكك لمدة 20 ثانية بدون كلام، وبعدها ابتسم له.",
    "اذكر ثلاث صفات تحبها بشريكك خلال 15 ثانية.",
    "قل لشريكك مجاملة صادقة ما قلتها من قبل.",
    "قلّد طريقة شريكك وهو يضحك، بلطف وبدون سخرية.",
    "اختار أغنية تذكركم ببعض واشرح السبب بجملة.",
    "امسك يد شريكك إذا كان مرتاحاً، واذكر ذكرى حلوة.",
    "سوّوا حركة سرية خاصة بيكم واتفقوا على معناها.",
    "احچِ لشريكك قصة أول انطباع أخذته عنه خلال دقيقة.",
    "كل واحد يذكر شيئاً واحداً يقدّره بالثاني.",
    "ابتكر لقباً لطيفاً جديداً لشريكك واسأله إذا يعجبه.",
    "ارسم قلباً بإصبعك بالهواء وخلّي شريكك يخمّن شكله.",
    "احچِ جملة رومانسية بصوت مذيع أخبار.",
    "مثّل مشهد لقاء بعد غياب طويل لمدة 20 ثانية.",
    "اذكر خمس أشياء تخلي وقتكم سوا ممتعاً خلال 20 ثانية.",
    "خلّي شريكك يختار أغنية وتردّدون مقطعاً مناسباً إذا تحبون.",
    "سوّوا تحدي الابتسامة: من يبتسم أولاً يخسر، لمدة 15 ثانية.",
    "قول «أقدّر وجودك بحياتي لأن…» وأكملها بصدق.",
    "اختار صورة أو ذكرى مشتركة واحچِ شنو تحب بيها.",
    "اكتب كلمة لطيفة لشريكك بإصبعك على كفّه إذا وافق.",
    "ابتكروا تحية خاصة بينكم من حركتين.",

    "احچِ ثلاث كلمات تصف علاقتكم حالياً.",
    "قلّد إعلاناً تلفزيونياً يروّج لصفات شريكك الحلوة.",
    "كل واحد يذكر نشاطاً جديداً يحب يجربه ويا الثاني.",
    "سوّوا دقيقة امتنان: كل واحد يكمل «شكراً لأنك…».",
    "اذكر موقفاً ضحّكك من قلبك ويا شريكك.",
    "اختاروا اسم فيلم خيالي عن علاقتكم واشرحوا ليش.",
    "قل لشريكك شيئاً تحبه بابتسامته أو ضحكته.",
    "مثّل شعور الفرح بدون كلام وخلي شريكك يخمّن.",
    "تبادلوا سؤالاً لطيفاً ما سألتوه من قبل، وجاوبوا.",
    "كل واحد يختار لوناً يذكّره بالثاني ويشرح السبب.",
    "احچِ عن موعد مثالي بسيط ما يحتاج فلوس كثيرة.",
    "قل جملة تشجيع لشريكك كأنه فاز بجائزة عالمية.",
    "سوّوا تحدي تذكّر: اذكروا ثلاث تفاصيل عن أول لقاء.",
    "ابتكروا شعاراً من خمس كلمات لعلاقتكم.",
    "كل واحد يذكر شيئاً يريد يتعلمه من الثاني.",
    "قل «أكثر شيء يخليني أبتسم وياك هو…» وأكمل.",
    "مثّلوا أول لقاء بينكم لمدة 30 ثانية إذا يناسبكم.",
    "اختاروا ذكرى وسمّوها عنواناً مضحكاً.",
    "كل واحد يذكر صفة يفتخر بيها بالثاني.",
    "احچِ لشريكك أمنية لطيفة تتمنى تصير إلكم.",
    "سوّوا تحدي الصمت المريح لمدة 20 ثانية، بدون هاتف.",
    "اذكر ثلاث أشياء مشتركة بينكم وشيئاً يميز كل واحد.",
    "ابتكر سؤالاً لطيفاً لشريكك لازم جوابه يكون قصة قصيرة.",
    "قل جملة حب أو تقدير بلهجتك المفضلة وبصوت هادئ.",
    "كل واحد يختار ذكرى يريد يصنع مثلها مرة ثانية.",
    "صف شريكك كأنه شخصية رئيسية برواية من جملة واحدة.",
    "سوّوا تصفيقاً بإيقاع خاص وكرروه ثلاث مرات.",
    "احچِ عن شيء تعلمته من شريكك خلال دقيقة.",
    "كل واحد يذكر طريقة بسيطة يقدر يخفف بيها ضغط الثاني.",
    "اختاروا كلمة سر تعني «أحتاج دعمك» واتفقوا عليها.",
    "قول ثلاث كلمات إيجابية عن نفسك وخلي شريكك يضيف رابعة.",
    "سوّوا مقابلة خيالية: اسأل شريكك عن سر نجاح علاقتكم.",
    "احچِ عن رحلة خيالية تتمنون تسووها سوا.",
    "كل واحد يختار أغنية تصف مزاجه اليوم ويشرح السبب.",
    "قل لشريكك شيئاً تحترمه بطريقة تعامله مع الناس.",
    "مثّل شعور الامتنان بحركة أو تعبير وجه.",
    "تبادلوا ابتسامة واذكروا شيئاً حلو صار هذا الأسبوع.",
    "كل واحد يقترح عادة أسبوعية بسيطة تسعدكم.",
    "احچِ عن وجبة تحبون تسووها أو تجربوها سوا.",
    "اختر ثلاث كلمات تصف يومك وخلي شريكك يخمّن معناها.",
    "قول لشريكك «أحب لما تسوي…» وأكمل بتفصيل محدد.",
    "تحدي الذاكرة: اذكروا تفاصيل موعد أو مكالمة مميزة.",
    "سوّوا تمثيل إعلان عن أفضل صفة بشريكك.",
    "كل واحد يذكر إنجازاً صغيراً فخور بيه هذا الشهر.",
    "اختاروا رمزاً تعبيرياً يصف علاقتكم واشرحوا السبب.",
    "قل جملة تشجيع بصوت رياضي يعلّق على مباراة.",
    "كل واحد يذكر شيئاً يتمنى يشكر نفسه عليه.",
    "تبادلوا فكرة لمفاجأة بسيطة وغير مكلفة.",
    "احچِ لشريكك عن لحظة حسّيت بيها بالفخر بنفسك.",
    "سوّوا تحدي كلمة ممنوعة: احچوا 30 ثانية بدون قول «إي».",
    "كل واحد يذكر مكاناً هادئاً يحب يزوره ويا الثاني.",
    "قل لشريكك صفة جميلة لاحظتها بيه مؤخراً.",
    "ابتكروا نهاية سعيدة لقصة قصيرة تبدأ بـ«بليلة هادئة…».",
    "كل واحد يختار لقباً مضحكاً لنفسه لليوم.",
    "احچِ عن عادة طفولية لطيفة تتذكرها.",
    "سوّوا تحدي التخمين: اختار ذكرى وخلي شريكك يخمّنها.",
    "قول لشريكك شيئاً تتمنى تحتفلون بيه قريباً.",
    "كل واحد يذكر شيئاً يخليه يحس بالراحة بعد يوم طويل.",
    "ابتكروا حركة احتفال صغيرة إذا حققتم هدفاً مشتركاً.",
    "احچِ عن ثلاث أشياء تحبها بوقتكم الهادئ سوا.",
    "قل جملة رومانسية وكأنك بطل مسلسل درامي.",
    "كل واحد يذكر نصيحة لطيفة يريد يقدمها للثاني.",
    "سوّوا تحدي الوصف: صفوا بعض بثلاث كلمات بدون تكرار.",
    "اختاروا ذكرى وعبّروا عنها بعنوان أغنية من تأليفكم.",
    "كل واحد يذكر شيئاً جديداً اكتشفه عن الثاني.",
    "قول لشريكك «وجودك يفرق وياي لأن…» وأكمل.",
    "مثّل شعور الحماس بخمس ثوانٍ من الحركة.",
    "كل واحد يقترح نشاطاً منزلياً ممتعاً لمدة 15 دقيقة.",
    "احچِ عن موقف تصرفت بيه شجاعة وتفتخر بيه.",
    "تبادلوا سؤالاً عن المستقبل وجاوبوا بدون مقاطعة.",
    "اختاروا شيئاً حولكم وابتكروا له قصة رومانسية مضحكة.",
    "كل واحد يذكر صفة يريد يتعلمها من الثاني.",
    "قل لشريكك شيئاً تتمنى يستمر بينكم دائماً.",
    "سوّوا تحدي التوازن: قفوا على قدم واحدة 10 ثوانٍ إذا كان آمناً.",
    "كل واحد يذكر ثلاث أشياء تخليه يحس بالتقدير.",
    "ابتكروا تحية صباحية خاصة تقدرون تستخدموها كل يوم.",
    "احچِ عن يوم مثالي بسيط تتمنون تعيشوه سوا.",
    "كل واحد يكمل: «أكثر شيء أتعلمه من علاقتنا هو…».",
    "قول كلمة دعم لشريكك وكأنها رسالة قبل يوم مهم.",
    "تبادلوا امتناناً واحداً عن هذا اليوم."
]
  }
};

const screens = [...document.querySelectorAll(".screen")];
const remainingSkipsStart = 2;

let skipsRemaining = {
  perspective: 2,
  deep: 2,
  challenge: 0
};
let currentCategory = null;
let currentQuestionIndex = null;
let lastQuestionIndex = null;
const usedQuestions = { perspective: new Set(), deep: new Set(), challenge: new Set() };
let toastTimer = null;

/* ===== Viewpoint Sound Effects ===== */

let soundEnabled = true;
let audioContext = null;

function initAudio() {
  if (!soundEnabled) return;

  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) return;

  if (!audioContext) {
    audioContext = new AudioEngine();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playTone(frequency, duration, type = "sine", volume = 0.045, delay = 0) {
  if (!soundEnabled) return;

  initAudio();
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const startAt = audioContext.currentTime + delay;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);

  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.03);
}

function playSound(name) {
  if (!soundEnabled) return;

  switch (name) {
    case "click":
      playTone(650, 0.07, "sine", 0.025);
      break;

    case "question":
      playTone(440, 0.16, "sine", 0.035);
      playTone(660, 0.22, "sine", 0.03, 0.10);
      break;

    case "challenge":
      playTone(330, 0.12, "triangle", 0.04);
      playTone(495, 0.16, "triangle", 0.045, 0.09);
      playTone(660, 0.20, "triangle", 0.04, 0.18);
      break;

    case "success":
      playTone(523, 0.13, "sine", 0.04);
      playTone(659, 0.15, "sine", 0.04, 0.10);
      playTone(784, 0.22, "sine", 0.04, 0.20);
      break;

    case "skip":
      playTone(580, 0.09, "sine", 0.03);
      playTone(420, 0.13, "sine", 0.025, 0.07);
      break;

    case "back":
      playTone(500, 0.08, "sine", 0.025);
      playTone(380, 0.10, "sine", 0.025, 0.07);
      break;
  }
}


const $ = (selector) => document.querySelector(selector);
const byId = (id) => document.getElementById(id);

function showScreen(id) {
  screens.forEach((screen) => {
    const active = screen.id === id;
    screen.classList.toggle("active", active);
    screen.setAttribute("aria-hidden", String(!active));
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  updateSkipCounters();
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function updateSkipCounters() {
  const isChallenge = Boolean(
    currentCategory && gameData[currentCategory].isChallenge
  );

  const remaining = currentCategory
    ? skipsRemaining[currentCategory]
    : 0;

  // عرض التلميحات في صفحة الأقسام
  byId("categorySkips").textContent = "2 لكل قسم";

  // عرض التلميحات المتبقية داخل القسم
  byId("gridSkips").textContent = isChallenge
    ? "بدون تخطي"
    : `${remaining} / ${remainingSkipsStart}`;

  byId("modalSkips").textContent = isChallenge
    ? "غير متاح"
    : `${remaining} متبقية`;

  byId("skipCounter").classList.toggle("hidden", isChallenge);
  byId("skipBtn").classList.toggle("hidden", isChallenge);
  byId("challengeFootnote").classList.toggle("hidden", !isChallenge);

  byId("skipBtn").disabled =
    !currentCategory || isChallenge || remaining <= 0;

  byId("skipBtn").setAttribute(
    "aria-disabled",
    String(byId("skipBtn").disabled)
  );
}

function renderNumbers() {
  const category = gameData[currentCategory];
  const grid = byId("numbersGrid");
  grid.replaceChildren();
  category.questions.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "number-btn";
    button.textContent = String(index + 1);
    button.setAttribute("aria-label", `السؤال رقم ${index + 1}`);
    if (usedQuestions[currentCategory].has(index)) button.classList.add("used");
    button.addEventListener("click", () => openQuestion(index));
    grid.appendChild(button);
  });
  byId("numbersTitle").innerHTML = `اختاروا <span>رقماً</span>`;
  byId("numbersDescription").textContent = category.description;
  byId("numberStep").textContent = `${category.icon} ${category.name}`;
  byId("numberCount").textContent = `${category.questions.length} اختيار`;
}

function chooseCategory(key) {
  if (!gameData[key]) return;
  playSound("click");
  currentCategory = key;
  currentQuestionIndex = null;
  renderNumbers();
  updateSkipCounters();
  showScreen("numbersScreen");
}

function openQuestion(index) {
  const category = gameData[currentCategory];
  if (!category || index < 0 || index >= category.questions.length) return;
  currentQuestionIndex = index;
  playSound(gameData[currentCategory].isChallenge ? "challenge" : "question");
  lastQuestionIndex = index;
  const question = category.questions[index];
  const number = String(index + 1).padStart(2, "0");
  byId("questionCategory").textContent = `${category.icon} ${category.name}`;
  byId("questionNumber").textContent = number;
  byId("questionCount").textContent = `${category.isChallenge ? "التحدي" : "السؤال"} ${number} / ${category.questions.length}`;
  byId("questionKicker").textContent = category.isChallenge ? "تحدّي هذه الجولة" : (currentCategory === "deep" ? "سؤال من القلب" : "سؤال للنقاش");
  byId("questionText").textContent = question;
  byId("questionHint").textContent = category.isChallenge
    ? "نفّذوه بطريقتكم، وخلو اللحظة ممتعة وآمنة للطرفين."
    : "خذوا وقتكم… اسمعوا بعض بدون مقاطعة.";
  byId("questionSymbol").textContent = category.isChallenge ? "✦" : "“";
  usedQuestions[currentCategory].add(index);
  document.querySelectorAll(".number-btn").forEach((button, i) => {
    button.classList.toggle("used", usedQuestions[currentCategory].has(i));
    button.classList.toggle("selected", i === index);
  });
  updateSkipCounters();
  showScreen("questionScreen");
}

function backToNumbers() {
  playSound("back");
  if (currentCategory) {
    renderNumbers();
    showScreen("numbersScreen");
  } else {
    showScreen("categoriesScreen");
  }
}

function markAnswered() {
  if (currentQuestionIndex === null) return;
  playSound("success");
  showToast(gameData[currentCategory].isChallenge ? "أحسنتم! ✨ اختاروا تحدياً جديداً." : "حلو! شكراً على الصراحة 💗");
  currentQuestionIndex = null;
  backToNumbers();
}

function skipQuestion() {
  if (currentQuestionIndex === null || !currentCategory) return;

  if (gameData[currentCategory].isChallenge) {
    showToast("هذا قسم التحديات — ماكو تخطٍّ هنا ⚡");
    return;
  }

  if (skipsRemaining[currentCategory] <= 0) {
    updateSkipCounters();
    showToast("خلصت تلميحات هذا القسم 💗");
    return;
  }

  skipsRemaining[currentCategory]--;

  playSound("skip");

  const remaining = skipsRemaining[currentCategory];

  currentQuestionIndex = null;

  updateSkipCounters();
  backToNumbers();

  showToast(`تم التخطي! بقيت ${remaining} من تلميحات هذا القسم.`);
}

function startNewSession() {
  skipsRemaining = {
  perspective: 2,
  deep: 2,
  challenge: 0
};
  currentCategory = null;
  currentQuestionIndex = null;
  lastQuestionIndex = null;
  Object.values(usedQuestions).forEach((set) => set.clear());
  updateSkipCounters();
  showScreen("welcomeScreen");
}

byId("startBtn").addEventListener("click", () => showScreen("rulesScreen"));
byId("rulesContinue").addEventListener("click", () => showScreen("categoriesScreen"));
byId("brandHome").addEventListener("click", () => {
  if (window.confirm("ترجع للبداية وتبدأ جلسة جديدة؟ راح تنمسح اختيارات الجلسة الحالية.")) startNewSession();
});
document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.go));
});
document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => chooseCategory(button.dataset.category));
});
byId("questionBack").addEventListener("click", backToNumbers);
byId("answeredBtn").addEventListener("click", markAnswered);
byId("skipBtn").addEventListener("click", skipQuestion);

updateSkipCounters();
showScreen("welcomeScreen");


/* ===== Viewpoint Background Music ===== */

(() => {
  const audio = document.getElementById("backgroundMusic");
  const toggleBtn = document.getElementById("musicToggle");
  const previousBtn = document.getElementById("musicPrevious");
  const nextBtn = document.getElementById("musicNext");
  const muteBtn = document.getElementById("musicMute");
  const volumeSlider = document.getElementById("musicVolume");
  const title = document.getElementById("musicTitle");

  if (
    !audio ||
    !toggleBtn ||
    !previousBtn ||
    !nextBtn ||
    !muteBtn ||
    !volumeSlider ||
    !title
  ) return;

  const songs = [
    { src: "song1.mp3", name: "موسيقى وجهة نظر 1 🎵" },
    { src: "song2.mp3", name: "موسيقى وجهة نظر 2 🎶" },
    { src: "song3.mp3", name: "موسيقى وجهة نظر 3 ❤️" },
    { src: "song4.mp3", name: "موسيقى وجهة نظر 4 🎻" }
  ];

  let currentSong = 0;
  let playRequested = false;

  audio.volume = Number(volumeSlider.value);

  function loadSong(index, autoplay = false) {
    currentSong = (index + songs.length) % songs.length;

    audio.src = songs[currentSong].src;
    title.textContent = songs[currentSong].name;

    if (autoplay) {
      playMusic();
    }
  }

  async function playMusic() {
    playRequested = true;

    try {
      await audio.play();
      toggleBtn.textContent = "⏸";
    } catch (error) {
      toggleBtn.textContent = "▶";
      title.textContent = "اضغط ▶ لتشغيل الموسيقى 🎵";
    }
  }

  function pauseMusic() {
    playRequested = false;
    audio.pause();
    toggleBtn.textContent = "▶";
  }

  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  });

  previousBtn.addEventListener("click", () => {
    loadSong(currentSong - 1, true);
  });

  nextBtn.addEventListener("click", () => {
    loadSong(currentSong + 1, true);
  });

  muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = Number(volumeSlider.value);

    if (audio.volume > 0 && audio.muted) {
      audio.muted = false;
      muteBtn.textContent = "🔊";
    }
  });

  audio.addEventListener("ended", () => {
    loadSong(currentSong + 1, true);
  });

  audio.addEventListener("play", () => {
    toggleBtn.textContent = "⏸";
  });

  audio.addEventListener("pause", () => {
    toggleBtn.textContent = "▶";
  });

  // حاول التشغيل عند فتح الموقع؛ قد يمنعه المتصفح حتى أول تفاعل.
  loadSong(0, false);
  playMusic();

  // إذا منع المتصفح التشغيل التلقائي، حاول مرة أخرى عند أول تفاعل.
  function firstInteraction() {
    if (audio.paused && !playRequested) {
      playMusic();
    }

    document.removeEventListener("pointerdown", firstInteraction);
    document.removeEventListener("keydown", firstInteraction);
  }

  document.addEventListener("pointerdown", firstInteraction);
  document.addEventListener("keydown", firstInteraction);
})();

