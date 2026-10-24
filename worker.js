const _0xQ1 = (_0xQ2) => `https://api.telegram.org/bot${_0xQ2}`;
const _0xQ3 = {
    en: { name: "English", flag: "🇬🇧" },
    fa: { name: "فارسی", flag: "🇮🇷" },
    ar: { name: "العربية", flag: "🇸🇦" },
    ru: { name: "Русский", flag: "🇷🇺" },
    id: { name: "Bahasa Indonesia", flag: "🇮🇩" },
    pt: { name: "Português", flag: "🇧🇷" },
    es: { name: "Español", flag: "🇪🇸" },
    tr: { name: "Türkçe", flag: "🇹🇷" },
    hi: { name: "हिन्दी", flag: "🇮🇳" },
    uk: { name: "Українська", flag: "🇺🇦" },
};
const _0xQ4 = "fa";
const _0xQ5 = {
    welcome: {
        fa: "👋 سلام! فایل خود را برای من ارسال کنید تا لینک اختصاصی دانلود دریافت کنید.",
        en: "👋 Hello! Send me a file and I'll give you a private download link.",
        ar: "👋 مرحباً! أرسل لي ملفًا وسأمنحك رابط تنزيل خاص.",
        ru: "👋 Привет! Отправьте мне файл, и я дам вам приватную ссылку для скачивания.",
        id: "👋 Halo! Kirimkan file kepada saya dan saya akan memberi tautan unduhan pribadi.",
        pt: "👋 Olá! Envie-me um arquivo e eu lhe darei um link de download privado.",
        es: "👋 ¡Hola! Envíame un archivo y te daré un enlace de descarga privado.",
        tr: "👋 Merhaba! Bana bir dosya gönder, sana özel bir indirme bağlantısı vereyim.",
        hi: "👋 नमस्ते! मुझे एक फ़ाइल भेजें और मैं आपको एक निजी डाउनलोड लिंक दूँगा।",
        uk: "👋 Привіт! Надішліть мені файл, і я дам вам приватне посилання для завантаження.",
    },
    help_text: {
        fa: "📌 فایل بفرستید تا لینک بگیرید، یا از لینک دریافتی برای دانلود استفاده کنید.",
        en: "📌 Send a file to get a link, or use a received link to download.",
        ar: "📌 أرسل ملفًا للحصول على رابط، أو استخدم رابطًا مستلمًا للتنزيل.",
        ru: "📌 Отправьте файл, чтобы получить ссылку, или используйте полученную ссылку для скачивания.",
        id: "📌 Kirim file untuk mendapatkan tautan, atau gunakan tautan yang diterima untuk mengunduh.",
        pt: "📌 Envie um arquivo para obter um link, ou use um link recebido para baixar.",
        es: "📌 Envía un archivo para obtener un enlace, o usa un enlace recibido para descargar.",
        tr: "📌 Bağlantı almak için dosya gönder ya da indirmek için aldığın bağlantıyı kullan.",
        hi: "📌 लिंक पाने के लिए फ़ाइल भेजें, या डाउनलोड के लिए प्राप्त लिंक का उपयोग करें।",
        uk: "📌 Надішліть файл, щоб отримати посилання, або скористайтесь отриманим посиланням для завантаження.",
    },
    choose_language: {
        fa: "🌐 لطفاً زبان خود را انتخاب کنید:", en: "🌐 Please choose your language:",
        ar: "🌐 يرجى اختيار لغتك:", ru: "🌐 Пожалуйста, выберите язык:",
        id: "🌐 Silakan pilih bahasa Anda:", pt: "🌐 Por favor, escolha seu idioma:",
        es: "🌐 Por favor, elige tu idioma:", tr: "🌐 Lütfen dilinizi seçin:",
        hi: "🌐 कृपया अपनी भाषा चुनें:", uk: "🌐 Будь ласка, оберіть мову:",
    },
    language_set: {
        fa: "✅ زبان با موفقیت تغییر کرد.", en: "✅ Language changed successfully.",
        ar: "✅ تم تغيير اللغة بنجاح.", ru: "✅ Язык успешно изменён.",
        id: "✅ Bahasa berhasil diubah.", pt: "✅ Idioma alterado com sucesso.",
        es: "✅ Idioma cambiado con éxito.", tr: "✅ Dil başarıyla değiştirildi.",
        hi: "✅ भाषा सफलतापूर्वक बदल दी गई।", uk: "✅ Мову успішно змінено.",
    },
    admin_panel_btn: {
        fa: "⚙️ پنل مدیریت", en: "⚙️ Admin Panel", ar: "⚙️ لوحة الإدارة", ru: "⚙️ Панель администратора",
        id: "⚙️ Panel Admin", pt: "⚙️ Painel Admin", es: "⚙️ Panel de Admin", tr: "⚙️ Yönetim Paneli",
        hi: "⚙️ एडमिन पैनल", uk: "⚙️ Панель адміністратора",
    },
    change_lang_btn: {
        fa: "🌐 تغییر زبان", en: "🌐 Change Language", ar: "🌐 تغيير اللغة", ru: "🌐 Сменить язык",
        id: "🌐 Ubah Bahasa", pt: "🌐 Mudar Idioma", es: "🌐 Cambiar Idioma", tr: "🌐 Dili Değiştir",
        hi: "🌐 भाषा बदलें", uk: "🌐 Змінити мову",
    },
    admin_only: {
        fa: "⛔ شما دسترسی ادمین ندارید.", en: "⛔ You don't have admin access.",
        ar: "⛔ ليس لديك صلاحية المسؤول.", ru: "⛔ У вас нет прав администратора.",
        id: "⛔ Anda tidak memiliki akses admin.", pt: "⛔ Você não tem acesso de administrador.",
        es: "⛔ No tienes acceso de administrador.", tr: "⛔ Yönetici erişiminiz yok.",
        hi: "⛔ आपके पास एडमिन एक्सेस नहीं है।", uk: "⛔ У вас немає прав адміністратора.",
    },
    upload_restricted_msg: {
        fa: "⛔ در حال حاضر فقط ادمین‌ها اجازه آپلود فایل دارند.", en: "⛔ Currently only admins are allowed to upload files.",
        ar: "⛔ حاليًا يُسمح فقط للمشرفين برفع الملفات.", ru: "⛔ В данный момент загружать файлы могут только администраторы.",
        id: "⛔ Saat ini hanya admin yang boleh mengunggah file.", pt: "⛔ No momento, apenas admins podem enviar arquivos.",
        es: "⛔ Actualmente solo los administradores pueden subir archivos.", tr: "⛔ Şu anda yalnızca yöneticiler dosya yükleyebilir.",
        hi: "⛔ फ़िलहाल केवल एडमिन ही फ़ाइल अपलोड कर सकते हैं।", uk: "⛔ Наразі завантажувати файли можуть лише адміністратори.",
    },
    file_saved: {
        fa: "✅ فایل با موفقیت ذخیره شد.", en: "✅ File saved successfully.",
        ar: "✅ تم حفظ الملف بنجاح.", ru: "✅ Файл успешно сохранён.",
        id: "✅ File berhasil disimpan.", pt: "✅ Arquivo salvo com sucesso.",
        es: "✅ Archivo guardado con éxito.", tr: "✅ Dosya başarıyla kaydedildi.",
        hi: "✅ फ़ाइल सफलतापूर्वक सहेजी गई।", uk: "✅ Файл успішно збережено.",
    },
    need_join_msg: {
        fa: "🔒 برای دریافت فایل ابتدا باید در کانال زیر عضو شوید.", en: "🔒 You must join the channel below before receiving the file.",
        ar: "🔒 يجب عليك الانضمام إلى القناة أدناه أولاً لتلقي الملف.", ru: "🔒 Чтобы получить файл, сначала подпишитесь на канал ниже.",
        id: "🔒 Anda harus bergabung dengan saluran di bawah ini sebelum menerima file.", pt: "🔒 Você deve entrar no canal abaixo antes de receber o arquivo.",
        es: "🔒 Debes unirte al canal de abajo antes de recibir el archivo.", tr: "🔒 Dosyayı almadan önce aşağıdaki kanala katılmalısınız.",
        hi: "🔒 फ़ाइल प्राप्त करने से पहले आपको नीचे दिए चैनल से जुड़ना होगा।", uk: "🔒 Щоб отримати файл, спершу приєднайтесь до каналу нижче.",
    },
    membership_confirmed: {
        fa: "✅ عضویت تایید شد", en: "✅ Membership confirmed", ar: "✅ تم تأكيد العضوية", ru: "✅ Подписка подтверждена",
        id: "✅ Keanggotaan dikonfirmasi", pt: "✅ Associação confirmada", es: "✅ Membresía confirmada", tr: "✅ Üyelik onaylandı",
        hi: "✅ सदस्यता की पुष्टि हुई", uk: "✅ Членство підтверджено",
    },
    membership_failed: {
        fa: "❌ هنوز عضو نشده‌اید.", en: "❌ You haven't joined yet.", ar: "❌ لم تنضم بعد.", ru: "❌ Вы ещё не подписались.",
        id: "❌ Anda belum bergabung.", pt: "❌ Você ainda não entrou.", es: "❌ Aún no te has unido.", tr: "❌ Henüz katılmadınız.",
        hi: "❌ आप अभी तक शामिल नहीं हुए हैं।", uk: "❌ Ви ще не приєдналися.",
    },
    file_not_found: {
        fa: "❌ فایل مورد نظر یافت نشد یا حذف شده است.", en: "❌ File not found or has been deleted.",
        ar: "❌ الملف غير موجود أو تم حذفه.", ru: "❌ Файл не найден или удалён.",
        id: "❌ File tidak ditemukan atau telah dihapus.", pt: "❌ Arquivo não encontrado ou foi excluído.",
        es: "❌ Archivo no encontrado o ha sido eliminado.", tr: "❌ Dosya bulunamadı veya silindi.",
        hi: "❌ फ़ाइल नहीं मिली या हटा दी गई है।", uk: "❌ Файл не знайдено або його видалено.",
    },
    admin_panel_title: {
        fa: "⚙️ <b>پنل مدیریت</b>", en: "⚙️ <b>Admin Panel</b>", ar: "⚙️ <b>لوحة الإدارة</b>", ru: "⚙️ <b>Панель администратора</b>",
        id: "⚙️ <b>Panel Admin</b>", pt: "⚙️ <b>Painel Admin</b>", es: "⚙️ <b>Panel de Admin</b>", tr: "⚙️ <b>Yönetim Paneli</b>",
        hi: "⚙️ <b>एडमिन पैनल</b>", uk: "⚙️ <b>Панель адміністратора</b>",
    },
    access_denied: {
        fa: "⛔ دسترسی ندارید.", en: "⛔ Access denied.", ar: "⛔ الوصول مرفوض.", ru: "⛔ Доступ запрещён.",
        id: "⛔ Akses ditolak.", pt: "⛔ Acesso negado.", es: "⛔ Acceso denegado.", tr: "⛔ Erişim reddedildi.",
        hi: "⛔ पहुँच अस्वीकृत।", uk: "⛔ Доступ заборонено.",
    },
    back_btn: {
        fa: "◀️ بازگشت", en: "◀️ Back", ar: "◀️ رجوع", ru: "◀️ Назад",
        id: "◀️ Kembali", pt: "◀️ Voltar", es: "◀️ Atrás", tr: "◀️ Geri",
        hi: "◀️ वापस", uk: "◀️ Назад",
    },
    adm_set_storage_btn: {
        fa: "📡 تنظیم کانال ذخیره‌سازی", en: "📡 Set storage channel", ar: "📡 تعيين قناة التخزين", ru: "📡 Настроить канал хранения",
        id: "📡 Atur saluran penyimpanan", pt: "📡 Definir canal de armazenamento", es: "📡 Configurar canal de almacenamiento", tr: "📡 Depolama kanalını ayarla",
        hi: "📡 स्टोरेज चैनल सेट करें", uk: "📡 Налаштувати канал зберігання",
    },
    adm_set_lock_btn: {
        fa: "🔒 تنظیم کانال قفل عضویت", en: "🔒 Set join-lock channel", ar: "🔒 تعيين قناة الاشتراك الإجباري", ru: "🔒 Настроить канал обязательной подписки",
        id: "🔒 Atur saluran wajib gabung", pt: "🔒 Definir canal de entrada obrigatória", es: "🔒 Configurar canal de unión obligatoria", tr: "🔒 Zorunlu katılım kanalını ayarla",
        hi: "🔒 अनिवार्य जॉइन चैनल सेट करें", uk: "🔒 Налаштувати канал обов'язкової підписки",
    },
    adm_del_lock_btn: {
        fa: "🔓 حذف قفل", en: "🔓 Remove lock", ar: "🔓 إزالة القفل", ru: "🔓 Снять блокировку",
        id: "🔓 Hapus kunci", pt: "🔓 Remover bloqueio", es: "🔓 Quitar bloqueo", tr: "🔓 Kilidi kaldır",
        hi: "🔓 लॉक हटाएं", uk: "🔓 Зняти блокування",
    },
    adm_stats_btn: {
        fa: "📊 آمار ربات", en: "📊 Bot stats", ar: "📊 إحصائيات البوت", ru: "📊 Статистика бота",
        id: "📊 Statistik bot", pt: "📊 Estatísticas do bot", es: "📊 Estadísticas del bot", tr: "📊 Bot istatistikleri",
        hi: "📊 बॉट आँकड़े", uk: "📊 Статистика бота",
    },
    adm_set_caption_btn: {
        fa: "✏️ تنظیم کپشن پیش‌فرض", en: "✏️ Set default caption", ar: "✏️ تعيين التسمية التوضيحية الافتراضية", ru: "✏️ Настроить подпись по умолчанию",
        id: "✏️ Atur keterangan default", pt: "✏️ Definir legenda padrão", es: "✏️ Configurar leyenda predeterminada", tr: "✏️ Varsayılan açıklamayı ayarla",
        hi: "✏️ डिफ़ॉल्ट कैप्शन सेट करें", uk: "✏️ Налаштувати підпис за замовчуванням",
    },
    adm_manage_admins_btn: {
        fa: "👥 مدیریت ادمین‌ها", en: "👥 Manage admins", ar: "👥 إدارة المشرفين", ru: "👥 Управление администраторами",
        id: "👥 Kelola admin", pt: "👥 Gerenciar admins", es: "👥 Gestionar administradores", tr: "👥 Yöneticileri yönet",
        hi: "👥 एडमिन प्रबंधित करें", uk: "👥 Керувати адміністраторами",
    },
    adm_search_file_btn: {
        fa: "🔍 جستجوی فایل با کد", en: "🔍 Search file by code", ar: "🔍 البحث عن ملف بالرمز", ru: "🔍 Поиск файла по коду",
        id: "🔍 Cari file dengan kode", pt: "🔍 Buscar arquivo por código", es: "🔍 Buscar archivo por código", tr: "🔍 Kod ile dosya ara",
        hi: "🔍 कोड से फ़ाइल खोजें", uk: "🔍 Пошук файлу за кодом",
    },
    adm_allow_all_btn: {
        fa: "🔓 اجازه آپلود به همه", en: "🔓 Allow everyone to upload", ar: "🔓 السماح للجميع بالرفع", ru: "🔓 Разрешить загрузку всем",
        id: "🔓 Izinkan semua orang mengunggah", pt: "🔓 Permitir que todos enviem", es: "🔓 Permitir que todos suban", tr: "🔓 Herkesin yüklemesine izin ver",
        hi: "🔓 सभी को अपलोड की अनुमति दें", uk: "🔓 Дозволити завантаження всім",
    },
    adm_restrict_btn: {
        fa: "🔐 آپلود فقط توسط ادمین‌ها", en: "🔐 Restrict upload to admins only", ar: "🔐 قصر الرفع على المشرفين فقط", ru: "🔐 Разрешить загрузку только администраторам",
        id: "🔐 Batasi unggahan hanya untuk admin", pt: "🔐 Restringir envio apenas a admins", es: "🔐 Restringir subida solo a administradores", tr: "🔐 Yüklemeyi yalnızca yöneticilerle sınırla",
        hi: "🔐 अपलोड केवल एडमिन तक सीमित करें", uk: "🔐 Дозволити завантаження лише адміністраторам",
    },
    adm_menu_buttons_btn: {
        fa: "🧩 مدیریت دکمه‌های منو", en: "🧩 Manage menu buttons", ar: "🧩 إدارة أزرار القائمة", ru: "🧩 Управление кнопками меню",
        id: "🧩 Kelola tombol menu", pt: "🧩 Gerenciar botões do menu", es: "🧩 Gestionar botones del menú", tr: "🧩 Menü düğmelerini yönet",
        hi: "🧩 मेनू बटन प्रबंधित करें", uk: "🧩 Керувати кнопками меню",
    },
    toggle_restricted_toast: {
        fa: "🔐 آپلود فقط برای ادمین‌ها", en: "🔐 Restricted to admins", ar: "🔐 مقتصر على المشرفين", ru: "🔐 Только для администраторов",
        id: "🔐 Dibatasi untuk admin", pt: "🔐 Restrito a admins", es: "🔐 Restringido a administradores", tr: "🔐 Yöneticilerle sınırlı",
        hi: "🔐 केवल एडमिन तक सीमित", uk: "🔐 Обмежено адміністраторами",
    },
    toggle_open_toast: {
        fa: "🔓 آپلود برای همه باز است", en: "🔓 Open to everyone", ar: "🔓 مفتوح للجميع", ru: "🔓 Открыто для всех",
        id: "🔓 Terbuka untuk semua", pt: "🔓 Aberto para todos", es: "🔓 Abierto para todos", tr: "🔓 Herkese açık",
        hi: "🔓 सभी के लिए खुला", uk: "🔓 Відкрито для всіх",
    },
    menu_buttons_title: {
        fa: "🧩 <b>دکمه‌های منو</b>\nروی دکمه‌ای بزنید تا حذف شود، یا یکی جدید اضافه کنید.",
        en: "🧩 <b>Menu buttons</b>\nTap a button to delete it, or add a new one.",
        ar: "🧩 <b>أزرار القائمة</b>\nانقر على زر لحذفه، أو أضف زرًا جديدًا.",
        ru: "🧩 <b>Кнопки меню</b>\nНажмите на кнопку, чтобы удалить её, или добавьте новую.",
        id: "🧩 <b>Tombol menu</b>\nKetuk tombol untuk menghapusnya, atau tambahkan yang baru.",
        pt: "🧩 <b>Botões do menu</b>\nToque em um botão para excluí-lo, ou adicione um novo.",
        es: "🧩 <b>Botones del menú</b>\nToca un botón para eliminarlo, o añade uno nuevo.",
        tr: "🧩 <b>Menü düğmeleri</b>\nSilmek için bir düğmeye dokun, ya da yeni bir tane ekle.",
        hi: "🧩 <b>मेनू बटन</b>\nहटाने के लिए किसी बटन पर टैप करें, या नया जोड़ें।",
        uk: "🧩 <b>Кнопки меню</b>\nНатисніть кнопку, щоб видалити її, або додайте нову.",
    },
    add_button_btn: {
        fa: "➕ افزودن دکمه", en: "➕ Add button", ar: "➕ إضافة زر", ru: "➕ Добавить кнопку",
        id: "➕ Tambah tombol", pt: "➕ Adicionar botão", es: "➕ Añadir botón", tr: "➕ Düğme ekle",
        hi: "➕ बटन जोड़ें", uk: "➕ Додати кнопку",
    },
    choose_button_type: {
        fa: "🧩 نوع دکمه را انتخاب کنید:", en: "🧩 Choose button type:", ar: "🧩 اختر نوع الزر:", ru: "🧩 Выберите тип кнопки:",
        id: "🧩 Pilih jenis tombol:", pt: "🧩 Escolha o tipo de botão:", es: "🧩 Elige el tipo de botón:", tr: "🧩 Düğme türünü seç:",
        hi: "🧩 बटन का प्रकार चुनें:", uk: "🧩 Оберіть тип кнопки:",
    },
    type_url_btn: {
        fa: "🔗 لینک (URL)", en: "🔗 Link (URL)", ar: "🔗 رابط (URL)", ru: "🔗 Ссылка (URL)",
        id: "🔗 Tautan (URL)", pt: "🔗 Link (URL)", es: "🔗 Enlace (URL)", tr: "🔗 Bağlantı (URL)",
        hi: "🔗 लिंक (URL)", uk: "🔗 Посилання (URL)",
    },
    type_text_btn: {
        fa: "💬 متن", en: "💬 Text", ar: "💬 نص", ru: "💬 Текст",
        id: "💬 Teks", pt: "💬 Texto", es: "💬 Texto", tr: "💬 Metin",
        hi: "💬 पाठ", uk: "💬 Текст",
    },
    label_prompt: {
        fa: "✏️ برچسب دکمه را ارسال کنید (متنی که روی دکمه نمایش داده می‌شود):",
        en: "✏️ Send the button label (text shown on the button):",
        ar: "✏️ أرسل تسمية الزر (النص الظاهر على الزر):",
        ru: "✏️ Отправьте название кнопки (текст на кнопке):",
        id: "✏️ Kirim label tombol (teks yang ditampilkan di tombol):",
        pt: "✏️ Envie o rótulo do botão (texto exibido no botão):",
        es: "✏️ Envía la etiqueta del botón (texto mostrado en el botón):",
        tr: "✏️ Düğme etiketini gönder (düğmede görünen metin):",
        hi: "✏️ बटन लेबल भेजें (बटन पर दिखने वाला टेक्स्ट):",
        uk: "✏️ Надішліть назву кнопки (текст на кнопці):",
    },
    url_prompt: {
        fa: "🔗 حالا لینک (URL) را ارسال کنید:", en: "🔗 Now send the URL:", ar: "🔗 الآن أرسل الرابط:", ru: "🔗 Теперь отправьте URL:",
        id: "🔗 Sekarang kirim URL-nya:", pt: "🔗 Agora envie a URL:", es: "🔗 Ahora envía la URL:", tr: "🔗 Şimdi URL'yi gönder:",
        hi: "🔗 अब URL भेजें:", uk: "🔗 Тепер надішліть URL:",
    },
    text_prompt: {
        fa: "💬 حالا متنی که هنگام زدن دکمه ارسال شود را بنویسید:",
        en: "💬 Now send the text to send when this button is tapped:",
        ar: "💬 الآن أرسل النص الذي سيُرسل عند الضغط على هذا الزر:",
        ru: "💬 Теперь отправьте текст, который будет отправлен при нажатии на кнопку:",
        id: "💬 Sekarang kirim teks yang akan dikirim saat tombol ini ditekan:",
        pt: "💬 Agora envie o texto que será enviado ao tocar neste botão:",
        es: "💬 Ahora envía el texto que se enviará al pulsar este botón:",
        tr: "💬 Şimdi bu düğmeye dokunulduğunda gönderilecek metni gönder:",
        hi: "💬 अब वह टेक्स्ट भेजें जो इस बटन को दबाने पर भेजा जाएगा:",
        uk: "💬 Тепер надішліть текст, який буде надіслано при натисканні цієї кнопки:",
    },
    color_prompt: {
        fa: "🎨 رنگ دکمه را انتخاب کنید:", en: "🎨 Pick a color for the button:", ar: "🎨 اختر لونًا للزر:", ru: "🎨 Выберите цвет кнопки:",
        id: "🎨 Pilih warna untuk tombol:", pt: "🎨 Escolha uma cor para o botão:", es: "🎨 Elige un color para el botón:", tr: "🎨 Düğme için bir renk seç:",
        hi: "🎨 बटन के लिए रंग चुनें:", uk: "🎨 Оберіть колір кнопки:",
    },
    color_primary: { fa: "🔵 آبی (Primary)", en: "🔵 Primary (blue)", ar: "🔵 أزرق (Primary)", ru: "🔵 Синий (Primary)", id: "🔵 Biru (Primary)", pt: "🔵 Azul (Primary)", es: "🔵 Azul (Primary)", tr: "🔵 Mavi (Primary)", hi: "🔵 नीला (Primary)", uk: "🔵 Синій (Primary)" },
    color_success: { fa: "🟢 سبز (Success)", en: "🟢 Success (green)", ar: "🟢 أخضر (Success)", ru: "🟢 Зелёный (Success)", id: "🟢 Hijau (Success)", pt: "🟢 Verde (Success)", es: "🟢 Verde (Success)", tr: "🟢 Yeşil (Success)", hi: "🟢 हरा (Success)", uk: "🟢 Зелений (Success)" },
    color_danger: { fa: "🔴 قرمز (Danger)", en: "🔴 Danger (red)", ar: "🔴 أحمر (Danger)", ru: "🔴 Красный (Danger)", id: "🔴 Merah (Danger)", pt: "🔴 Vermelho (Danger)", es: "🔴 Rojo (Danger)", tr: "🔴 Kırmızı (Danger)", hi: "🔴 लाल (Danger)", uk: "🔴 Червоний (Danger)" },
    color_default: { fa: "⚪ پیش‌فرض (بدون رنگ)", en: "⚪ Default (no style)", ar: "⚪ افتراضي (بدون نمط)", ru: "⚪ По умолчанию (без стиля)", id: "⚪ Default (tanpa gaya)", pt: "⚪ Padrão (sem estilo)", es: "⚪ Predeterminado (sin estilo)", tr: "⚪ Varsayılan (stil yok)", hi: "⚪ डिफ़ॉल्ट (बिना शैली)", uk: "⚪ За замовчуванням (без стилю)" },
    button_added_toast: {
        fa: "✅ دکمه اضافه شد", en: "✅ Button added", ar: "✅ تمت إضافة الزر", ru: "✅ Кнопка добавлена",
        id: "✅ Tombol ditambahkan", pt: "✅ Botão adicionado", es: "✅ Botón añadido", tr: "✅ Düğme eklendi",
        hi: "✅ बटन जोड़ा गया", uk: "✅ Кнопку додано",
    },
    deleted_toast: {
        fa: "🗑 حذف شد", en: "🗑 Deleted", ar: "🗑 تم الحذف", ru: "🗑 Удалено",
        id: "🗑 Dihapus", pt: "🗑 Excluído", es: "🗑 Eliminado", tr: "🗑 Silindi",
        hi: "🗑 हटाया गया", uk: "🗑 Видалено",
    },
    storage_forward_prompt: {
        fa: "📡 یک پیام از کانال/گروه مورد نظر برای ذخیره‌سازی فوروارد کنید (ربات باید ادمین آن باشد).",
        en: "📡 Forward a message from the target storage channel/group (the bot must be admin there).",
        ar: "📡 قم بإعادة توجيه رسالة من القناة/المجموعة المستهدفة للتخزين (يجب أن يكون البوت مشرفًا فيها).",
        ru: "📡 Перешлите сообщение из целевого канала/группы для хранения (бот должен быть там администратором).",
        id: "📡 Teruskan pesan dari saluran/grup penyimpanan target (bot harus menjadi admin di sana).",
        pt: "📡 Encaminhe uma mensagem do canal/grupo de armazenamento alvo (o bot deve ser admin lá).",
        es: "📡 Reenvía un mensaje del canal/grupo de almacenamiento objetivo (el bot debe ser admin allí).",
        tr: "📡 Hedef depolama kanalından/grubundan bir mesaj ilet (botun orada yönetici olması gerekir).",
        hi: "📡 लक्ष्य स्टोरेज चैनल/समूह से एक संदेश फ़ॉरवर्ड करें (बॉट को वहां एडमिन होना चाहिए)।",
        uk: "📡 Перешліть повідомлення з цільового каналу/групи для зберігання (бот має бути там адміністратором).",
    },
    storage_set_success: {
        fa: "✅ کانال ذخیره‌سازی تنظیم شد: <b>{title}</b>", en: "✅ Storage channel set: <b>{title}</b>",
        ar: "✅ تم تعيين قناة التخزين: <b>{title}</b>", ru: "✅ Канал хранения установлен: <b>{title}</b>",
        id: "✅ Saluran penyimpanan diatur: <b>{title}</b>", pt: "✅ Canal de armazenamento definido: <b>{title}</b>",
        es: "✅ Canal de almacenamiento configurado: <b>{title}</b>", tr: "✅ Depolama kanalı ayarlandı: <b>{title}</b>",
        hi: "✅ स्टोरेज चैनल सेट: <b>{title}</b>", uk: "✅ Канал зберігання встановлено: <b>{title}</b>",
    },
    storage_need_forward: {
        fa: "⚠️ لطفاً یک پیام فورواردی از کانال/گروه ارسال کنید.", en: "⚠️ Please forward a message from the channel/group.",
        ar: "⚠️ يرجى إعادة توجيه رسالة من القناة/المجموعة.", ru: "⚠️ Пожалуйста, перешлите сообщение из канала/группы.",
        id: "⚠️ Silakan teruskan pesan dari saluran/grup.", pt: "⚠️ Por favor, encaminhe uma mensagem do canal/grupo.",
        es: "⚠️ Por favor, reenvía un mensaje del canal/grupo.", tr: "⚠️ Lütfen kanaldan/gruptan bir mesaj ilet.",
        hi: "⚠️ कृपया चैनल/समूह से एक संदेश फ़ॉरवर्ड करें।", uk: "⚠️ Будь ласка, перешліть повідомлення з каналу/групи.",
    },
    storage_need_admin: {
        fa: "❌ ابتدا باید ربات را ادمین این کانال/گروه کنید.", en: "❌ The bot must be an admin of this channel/group first.",
        ar: "❌ يجب أن يكون البوت مشرفًا في هذه القناة/المجموعة أولاً.", ru: "❌ Сначала бот должен стать администратором этого канала/группы.",
        id: "❌ Bot harus menjadi admin di saluran/grup ini terlebih dahulu.", pt: "❌ O bot precisa ser admin deste canal/grupo primeiro.",
        es: "❌ El bot debe ser administrador de este canal/grupo primero.", tr: "❌ Botun önce bu kanalda/grupta yönetici olması gerekir.",
        hi: "❌ पहले बॉट को इस चैनल/समूह का एडमिन बनाना होगा।", uk: "❌ Спочатку бот має стати адміністратором цього каналу/групи.",
    },
    lock_forward_prompt: {
        fa: "🔒 یک پیام از کانالی که عضویت در آن اجباری خواهد بود را فوروارد کنید.",
        en: "🔒 Forward a message from the channel required for mandatory join.",
        ar: "🔒 قم بإعادة توجيه رسالة من القناة المطلوب الانضمام إليها إجباريًا.",
        ru: "🔒 Перешлите сообщение из канала, обязательного для подписки.",
        id: "🔒 Teruskan pesan dari saluran yang wajib diikuti.",
        pt: "🔒 Encaminhe uma mensagem do canal exigido para entrada obrigatória.",
        es: "🔒 Reenvía un mensaje del canal requerido para la unión obligatoria.",
        tr: "🔒 Zorunlu katılım için gereken kanaldan bir mesaj ilet.",
        hi: "🔒 अनिवार्य जॉइन के लिए आवश्यक चैनल से एक संदेश फ़ॉरवर्ड करें।",
        uk: "🔒 Перешліть повідомлення з каналу, обов'язкового для підписки.",
    },
    lock_set_success: {
        fa: "✅ کانال قفل عضویت تنظیم شد: <b>{title}</b>", en: "✅ Join-lock channel set: <b>{title}</b>",
        ar: "✅ تم تعيين قناة الاشتراك الإجباري: <b>{title}</b>", ru: "✅ Канал обязательной подписки установлен: <b>{title}</b>",
        id: "✅ Saluran wajib gabung diatur: <b>{title}</b>", pt: "✅ Canal de entrada obrigatória definido: <b>{title}</b>",
        es: "✅ Canal de unión obligatoria configurado: <b>{title}</b>", tr: "✅ Zorunlu katılım kanalı ayarlandı: <b>{title}</b>",
        hi: "✅ अनिवार्य जॉइन चैनल सेट: <b>{title}</b>", uk: "✅ Канал обов'язкової підписки встановлено: <b>{title}</b>",
    },
    lock_removed_toast: {
        fa: "✅ قفل عضویت حذف شد", en: "✅ Join-lock removed", ar: "✅ تمت إزالة قفل الاشتراك", ru: "✅ Блокировка снята",
        id: "✅ Kunci gabung dihapus", pt: "✅ Bloqueio removido", es: "✅ Bloqueo eliminado", tr: "✅ Katılım kilidi kaldırıldı",
        hi: "✅ जॉइन लॉक हटाया गया", uk: "✅ Блокування знято",
    },
    stats_title: {
        fa: "📊 <b>آمار</b>\n\n👥 کاربران: {users}\n📁 فایل‌ها: {files}\n⬆️ آپلودها: {uploads}\n⬇️ دانلودها: {downloads}",
        en: "📊 <b>Stats</b>\n\n👥 Users: {users}\n📁 Files: {files}\n⬆️ Uploads: {uploads}\n⬇️ Downloads: {downloads}",
        ar: "📊 <b>الإحصائيات</b>\n\n👥 المستخدمون: {users}\n📁 الملفات: {files}\n⬆️ الرفع: {uploads}\n⬇️ التنزيلات: {downloads}",
        ru: "📊 <b>Статистика</b>\n\n👥 Пользователи: {users}\n📁 Файлы: {files}\n⬆️ Загрузки: {uploads}\n⬇️ Скачивания: {downloads}",
        id: "📊 <b>Statistik</b>\n\n👥 Pengguna: {users}\n📁 File: {files}\n⬆️ Unggahan: {uploads}\n⬇️ Unduhan: {downloads}",
        pt: "📊 <b>Estatísticas</b>\n\n👥 Usuários: {users}\n📁 Arquivos: {files}\n⬆️ Envios: {uploads}\n⬇️ Downloads: {downloads}",
        es: "📊 <b>Estadísticas</b>\n\n👥 Usuarios: {users}\n📁 Archivos: {files}\n⬆️ Subidas: {uploads}\n⬇️ Descargas: {downloads}",
        tr: "📊 <b>İstatistikler</b>\n\n👥 Kullanıcılar: {users}\n📁 Dosyalar: {files}\n⬆️ Yüklemeler: {uploads}\n⬇️ İndirmeler: {downloads}",
        hi: "📊 <b>आँकड़े</b>\n\n👥 उपयोगकर्ता: {users}\n📁 फ़ाइलें: {files}\n⬆️ अपलोड: {uploads}\n⬇️ डाउनलोड: {downloads}",
        uk: "📊 <b>Статистика</b>\n\n👥 Користувачі: {users}\n📁 Файли: {files}\n⬆️ Завантаження на сервер: {uploads}\n⬇️ Завантаження: {downloads}",
    },
    caption_prompt: {
        fa: "✏️ متن جدید کپشن پیش‌فرض را ارسال کنید (زیر کپشن اصلی هر فایل اضافه می‌شود). می‌توانید از {filename} و {size} استفاده کنید.",
        en: "✏️ Send the new default caption template (appended below each file's own caption). You can use {filename} and {size}.",
        ar: "✏️ أرسل قالب التسمية التوضيحية الافتراضية الجديد (يُضاف أسفل تسمية كل ملف). يمكنك استخدام {filename} و {size}.",
        ru: "✏️ Отправьте новый шаблон подписи по умолчанию (добавляется под собственной подписью каждого файла). Можно использовать {filename} и {size}.",
        id: "✏️ Kirim template keterangan default baru (ditambahkan di bawah keterangan asli setiap file). Anda bisa memakai {filename} dan {size}.",
        pt: "✏️ Envie o novo modelo de legenda padrão (adicionado abaixo da legenda de cada arquivo). Você pode usar {filename} e {size}.",
        es: "✏️ Envía la nueva plantilla de leyenda predeterminada (se añade debajo de la leyenda propia de cada archivo). Puedes usar {filename} y {size}.",
        tr: "✏️ Yeni varsayılan açıklama şablonunu gönder (her dosyanın kendi açıklamasının altına eklenir). {filename} ve {size} kullanabilirsin.",
        hi: "✏️ नया डिफ़ॉल्ट कैप्शन टेम्पलेट भेजें (हर फ़ाइल के अपने कैप्शन के नीचे जोड़ा जाता है)। आप {filename} और {size} का उपयोग कर सकते हैं।",
        uk: "✏️ Надішліть новий шаблон підпису за замовчуванням (додається під власним підписом кожного файлу). Можна використовувати {filename} і {size}.",
    },
    caption_updated: {
        fa: "✅ کپشن پیش‌فرض به‌روزرسانی شد.", en: "✅ Default caption template updated.", ar: "✅ تم تحديث قالب التسمية التوضيحية الافتراضية.", ru: "✅ Шаблон подписи по умолчанию обновлён.",
        id: "✅ Template keterangan default diperbarui.", pt: "✅ Modelo de legenda padrão atualizado.", es: "✅ Plantilla de leyenda predeterminada actualizada.", tr: "✅ Varsayılan açıklama şablonu güncellendi.",
        hi: "✅ डिफ़ॉल्ट कैप्शन टेम्पलेट अपडेट किया गया।", uk: "✅ Шаблон підпису за замовчуванням оновлено.",
    },
    admins_title: {
        fa: "👥 <b>ادمین‌ها</b>\n\n{list}", en: "👥 <b>Admins</b>\n\n{list}", ar: "👥 <b>المشرفون</b>\n\n{list}", ru: "👥 <b>Администраторы</b>\n\n{list}",
        id: "👥 <b>Admin</b>\n\n{list}", pt: "👥 <b>Admins</b>\n\n{list}", es: "👥 <b>Administradores</b>\n\n{list}", tr: "👥 <b>Yöneticiler</b>\n\n{list}",
        hi: "👥 <b>एडमिन</b>\n\n{list}", uk: "👥 <b>Адміністратори</b>\n\n{list}",
    },
    add_admin_btn: {
        fa: "➕ افزودن ادمین", en: "➕ Add admin", ar: "➕ إضافة مشرف", ru: "➕ Добавить администратора",
        id: "➕ Tambah admin", pt: "➕ Adicionar admin", es: "➕ Añadir administrador", tr: "➕ Yönetici ekle",
        hi: "➕ एडमिन जोड़ें", uk: "➕ Додати адміністратора",
    },
    owner_only: {
        fa: "⛔ فقط مالک اصلی می‌تواند این کار را انجام دهد", en: "⛔ Owner only", ar: "⛔ للمالك فقط", ru: "⛔ Только для владельца",
        id: "⛔ Hanya pemilik", pt: "⛔ Somente o dono", es: "⛔ Solo el propietario", tr: "⛔ Sadece sahip",
        hi: "⛔ केवल मालिक", uk: "⛔ Лише для власника",
    },
    add_admin_prompt: {
        fa: "🆔 آیدی عددی کاربر را ارسال کنید.", en: "🆔 Send the numeric user ID.", ar: "🆔 أرسل معرف المستخدم الرقمي.", ru: "🆔 Отправьте числовой ID пользователя.",
        id: "🆔 Kirim ID numerik pengguna.", pt: "🆔 Envie o ID numérico do usuário.", es: "🆔 Envía el ID numérico del usuario.", tr: "🆔 Kullanıcının sayısal kimliğini gönder.",
        hi: "🆔 उपयोगकर्ता की संख्यात्मक आईडी भेजें।", uk: "🆔 Надішліть числовий ID користувача.",
    },
    invalid_id: {
        fa: "⚠️ آیدی عددی نامعتبر است.", en: "⚠️ Invalid numeric ID.", ar: "⚠️ معرف رقمي غير صالح.", ru: "⚠️ Неверный числовой ID.",
        id: "⚠️ ID numerik tidak valid.", pt: "⚠️ ID numérico inválido.", es: "⚠️ ID numérico inválido.", tr: "⚠️ Geçersiz sayısal kimlik.",
        hi: "⚠️ अमान्य संख्यात्मक आईडी।", uk: "⚠️ Недійсний числовий ID.",
    },
    admin_added: {
        fa: "✅ کاربر <code>{id}</code> به‌عنوان ادمین اضافه شد.", en: "✅ User <code>{id}</code> added as admin.",
        ar: "✅ تمت إضافة المستخدم <code>{id}</code> كمشرف.", ru: "✅ Пользователь <code>{id}</code> добавлен как администратор.",
        id: "✅ Pengguna <code>{id}</code> ditambahkan sebagai admin.", pt: "✅ Usuário <code>{id}</code> adicionado como admin.",
        es: "✅ Usuario <code>{id}</code> añadido como administrador.", tr: "✅ Kullanıcı <code>{id}</code> yönetici olarak eklendi.",
        hi: "✅ उपयोगकर्ता <code>{id}</code> को एडमिन के रूप में जोड़ा गया।", uk: "✅ Користувача <code>{id}</code> додано як адміністратора.",
    },
    search_prompt: {
        fa: "🔍 کد فایل را ارسال کنید.", en: "🔍 Send the file code.", ar: "🔍 أرسل رمز الملف.", ru: "🔍 Отправьте код файла.",
        id: "🔍 Kirim kode file.", pt: "🔍 Envie o código do arquivo.", es: "🔍 Envía el código del archivo.", tr: "🔍 Dosya kodunu gönder.",
        hi: "🔍 फ़ाइल कोड भेजें।", uk: "🔍 Надішліть код файлу.",
    },
    search_not_found: {
        fa: "❌ فایلی با این کد یافت نشد.", en: "❌ No file found with this code.", ar: "❌ لم يتم العثور على ملف بهذا الرمز.", ru: "❌ Файл с таким кодом не найден.",
        id: "❌ Tidak ada file dengan kode ini.", pt: "❌ Nenhum arquivo encontrado com este código.", es: "❌ No se encontró ningún archivo con este código.", tr: "❌ Bu kodla dosya bulunamadı.",
        hi: "❌ इस कोड से कोई फ़ाइल नहीं मिली।", uk: "❌ Файл із таким кодом не знайдено.",
    },
    file_info: {
        fa: "📄 <b>{name}</b>\n📦 {size}\n⬇️ دانلودها: {downloads}\n📝 کپشن: {caption}",
        en: "📄 <b>{name}</b>\n📦 {size}\n⬇️ Downloads: {downloads}\n📝 Caption: {caption}",
        ar: "📄 <b>{name}</b>\n📦 {size}\n⬇️ التنزيلات: {downloads}\n📝 التسمية: {caption}",
        ru: "📄 <b>{name}</b>\n📦 {size}\n⬇️ Скачивания: {downloads}\n📝 Подпись: {caption}",
        id: "📄 <b>{name}</b>\n📦 {size}\n⬇️ Unduhan: {downloads}\n📝 Keterangan: {caption}",
        pt: "📄 <b>{name}</b>\n📦 {size}\n⬇️ Downloads: {downloads}\n📝 Legenda: {caption}",
        es: "📄 <b>{name}</b>\n📦 {size}\n⬇️ Descargas: {downloads}\n📝 Leyenda: {caption}",
        tr: "📄 <b>{name}</b>\n📦 {size}\n⬇️ İndirmeler: {downloads}\n📝 Açıklama: {caption}",
        hi: "📄 <b>{name}</b>\n📦 {size}\n⬇️ डाउनलोड: {downloads}\n📝 कैप्शन: {caption}",
        uk: "📄 <b>{name}</b>\n📦 {size}\n⬇️ Завантаження: {downloads}\n📝 Підпис: {caption}",
    },
    delete_file_btn: {
        fa: "🗑 حذف فایل", en: "🗑 Delete file", ar: "🗑 حذف الملف", ru: "🗑 Удалить файл",
        id: "🗑 Hapus file", pt: "🗑 Excluir arquivo", es: "🗑 Eliminar archivo", tr: "🗑 Dosyayı sil",
        hi: "🗑 फ़ाइल हटाएं", uk: "🗑 Видалити файл",
    },
    file_deleted_toast: {
        fa: "🗑 فایل حذف شد", en: "🗑 File deleted", ar: "🗑 تم حذف الملف", ru: "🗑 Файл удалён",
        id: "🗑 File dihapus", pt: "🗑 Arquivo excluído", es: "🗑 Archivo eliminado", tr: "🗑 Dosya silindi",
        hi: "🗑 फ़ाइल हटाई गई", uk: "🗑 Файл видалено",
    },
    storage_not_set: {
        fa: "⚠️ کانال ذخیره‌سازی هنوز تنظیم نشده است.", en: "⚠️ Storage channel is not configured yet.", ar: "⚠️ لم يتم تكوين قناة التخزين بعد.", ru: "⚠️ Канал хранения ещё не настроен.",
        id: "⚠️ Saluran penyimpanan belum dikonfigurasi.", pt: "⚠️ O canal de armazenamento ainda não foi configurado.", es: "⚠️ El canal de almacenamiento aún no está configurado.", tr: "⚠️ Depolama kanalı henüz yapılandırılmadı.",
        hi: "⚠️ स्टोरेज चैनल अभी कॉन्फ़िगर नहीं किया गया है।", uk: "⚠️ Канал зберігання ще не налаштовано.",
    },
    upload_failed: {
        fa: "❌ ذخیره فایل ناموفق بود. مطمئن شوید ربات ادمین کانال ذخیره‌سازی است.", en: "❌ Failed to save file. Make sure the bot is an admin of the storage channel.",
        ar: "❌ فشل حفظ الملف. تأكد من أن البوت مشرف في قناة التخزين.", ru: "❌ Не удалось сохранить файл. Убедитесь, что бот является администратором канала хранения.",
        id: "❌ Gagal menyimpan file. Pastikan bot adalah admin saluran penyimpanan.", pt: "❌ Falha ao salvar o arquivo. Verifique se o bot é admin do canal de armazenamento.",
        es: "❌ No se pudo guardar el archivo. Asegúrate de que el bot sea admin del canal de almacenamiento.", tr: "❌ Dosya kaydedilemedi. Botun depolama kanalında yönetici olduğundan emin ol.",
        hi: "❌ फ़ाइल सहेजने में विफल। सुनिश्चित करें कि बॉट स्टोरेज चैनल का एडमिन है।", uk: "❌ Не вдалося зберегти файл. Переконайтеся, що бот є адміністратором каналу зберігання.",
    },
    download_failed: {
        fa: "❌ ارسال فایل ناموفق بود.", en: "❌ Failed to send file.", ar: "❌ فشل إرسال الملف.", ru: "❌ Не удалось отправить файл.",
        id: "❌ Gagal mengirim file.", pt: "❌ Falha ao enviar o arquivo.", es: "❌ No se pudo enviar el archivo.", tr: "❌ Dosya gönderilemedi.",
        hi: "❌ फ़ाइल भेजने में विफल।", uk: "❌ Не вдалося надіслати файл.",
    },
    share_btn: {
        fa: "🔗 اشتراک‌گذاری", en: "🔗 Share", ar: "🔗 مشاركة", ru: "🔗 Поделиться",
        id: "🔗 Bagikan", pt: "🔗 Compartilhar", es: "🔗 Compartir", tr: "🔗 Paylaş",
        hi: "🔗 साझा करें", uk: "🔗 Поділитися",
    },
    adm_autodelete_btn: {
        fa: "⏱ حذف خودکار فایل", en: "⏱ Auto-delete file", ar: "⏱ الحذف التلقائي للملف", ru: "⏱ Автоудаление файла",
        id: "⏱ Hapus otomatis file", pt: "⏱ Exclusão automática do arquivo", es: "⏱ Autoeliminación del archivo", tr: "⏱ Dosyayı otomatik sil",
        hi: "⏱ फ़ाइल स्वतः हटाना", uk: "⏱ Автовидалення файлу",
    },
    autodelete_menu_title: {
        fa: "⏱ <b>حذف خودکار فایل بعد از دانلود</b>\n\nوضعیت: {status}\nمدت زمان: {seconds} ثانیه\n\n⚠️ {warning}",
        en: "⏱ <b>Auto-delete file after download</b>\n\nStatus: {status}\nDelay: {seconds}s\n\n⚠️ {warning}",
        ar: "⏱ <b>الحذف التلقائي للملف بعد التنزيل</b>\n\nالحالة: {status}\nالمدة: {seconds} ثانية\n\n⚠️ {warning}",
        ru: "⏱ <b>Автоудаление файла после скачивания</b>\n\nСтатус: {status}\nЗадержка: {seconds} сек\n\n⚠️ {warning}",
        id: "⏱ <b>Hapus otomatis file setelah unduh</b>\n\nStatus: {status}\nJeda: {seconds} detik\n\n⚠️ {warning}",
        pt: "⏱ <b>Excluir arquivo automaticamente após download</b>\n\nStatus: {status}\nAtraso: {seconds}s\n\n⚠️ {warning}",
        es: "⏱ <b>Autoeliminar archivo tras la descarga</b>\n\nEstado: {status}\nRetraso: {seconds}s\n\n⚠️ {warning}",
        tr: "⏱ <b>İndirmeden sonra dosyayı otomatik sil</b>\n\nDurum: {status}\nGecikme: {seconds} sn\n\n⚠️ {warning}",
        hi: "⏱ <b>डाउनलोड के बाद फ़ाइल स्वतः हटाना</b>\n\nस्थिति: {status}\nदेरी: {seconds} सेकंड\n\n⚠️ {warning}",
        uk: "⏱ <b>Автовидалення файлу після завантаження</b>\n\nСтатус: {status}\nЗатримка: {seconds} с\n\n⚠️ {warning}",
    },
    autodelete_on: {
        fa: "🟢 فعال", en: "🟢 Enabled", ar: "🟢 مفعّل", ru: "🟢 Включено",
        id: "🟢 Aktif", pt: "🟢 Ativado", es: "🟢 Activado", tr: "🟢 Etkin",
        hi: "🟢 सक्रिय", uk: "🟢 Увімкнено",
    },
    autodelete_off: {
        fa: "🔴 غیرفعال", en: "🔴 Disabled", ar: "🔴 معطّل", ru: "🔴 Выключено",
        id: "🔴 Nonaktif", pt: "🔴 Desativado", es: "🔴 Desactivado", tr: "🔴 Devre dışı",
        hi: "🔴 निष्क्रिय", uk: "🔴 Вимкнено",
    },
    autodelete_warning: {
        fa: "توصیه می‌شود این گزینه غیرفعال بماند. فعال کردنش یعنی به ازای هر دانلود یک درخواست اضافه (حذف پیام) به تلگرام و همچنین یک عملیات زمان‌بندی‌شده روی Worker اجرا می‌شود، که سهمیه رایگان Cloudflare (درخواست‌ها و CPU روزانه) را خیلی زودتر تمام می‌کند.",
        en: "It's recommended to keep this disabled. Enabling it means an extra Telegram request (deleting the message) plus a scheduled task on the Worker per download — this burns through Cloudflare's free daily request/CPU quota much faster.",
        ar: "يُنصح بإبقاء هذا الخيار معطلاً. تفعيله يعني طلبًا إضافيًا لتيليجرام (حذف الرسالة) بالإضافة إلى مهمة مجدولة على الـ Worker لكل تنزيل، مما يستهلك حصة Cloudflare اليومية المجانية (الطلبات والمعالجة) أسرع بكثير.",
        ru: "Рекомендуется оставить эту опцию выключенной. Включение означает дополнительный запрос к Telegram (удаление сообщения) плюс отложенную задачу на Worker при каждом скачивании — это гораздо быстрее исчерпывает бесплатную дневную квоту Cloudflare (запросы и CPU).",
        id: "Disarankan untuk membiarkan opsi ini nonaktif. Mengaktifkannya berarti satu permintaan Telegram tambahan (menghapus pesan) plus tugas terjadwal di Worker untuk setiap unduhan — ini menghabiskan kuota gratis harian Cloudflare (permintaan/CPU) jauh lebih cepat.",
        pt: "Recomenda-se manter esta opção desativada. Ativá-la significa uma requisição extra ao Telegram (excluir a mensagem) mais uma tarefa agendada no Worker a cada download — isso consome a cota diária gratuita da Cloudflare (requisições/CPU) muito mais rápido.",
        es: "Se recomienda mantener esta opción desactivada. Activarla implica una solicitud extra a Telegram (eliminar el mensaje) más una tarea programada en el Worker por cada descarga, lo que agota mucho más rápido la cuota diaria gratuita de Cloudflare (solicitudes/CPU).",
        tr: "Bu seçeneğin devre dışı kalması önerilir. Etkinleştirmek, her indirmede Telegram'a ek bir istek (mesajı silme) ve Worker üzerinde zamanlanmış bir görev anlamına gelir — bu, Cloudflare'in ücretsiz günlük kotasını (istek/CPU) çok daha hızlı tüketir.",
        hi: "इस विकल्प को निष्क्रिय रखने की सलाह दी जाती है। इसे सक्रिय करने का मतलब है हर डाउनलोड पर टेलीग्राम को एक अतिरिक्त अनुरोध (संदेश हटाना) और Worker पर एक निर्धारित कार्य — जिससे Cloudflare का मुफ़्त दैनिक कोटा (अनुरोध/CPU) बहुत जल्दी समाप्त हो जाता है।",
        uk: "Рекомендовано залишити цю опцію вимкненою. Увімкнення означає додатковий запит до Telegram (видалення повідомлення) плюс заплановане завдання на Worker для кожного завантаження — це набагато швидше вичерпує безкоштовну денну квоту Cloudflare (запити/CPU).",
    },
    toggle_autodelete_btn: {
        fa: "🔄 تغییر وضعیت", en: "🔄 Toggle status", ar: "🔄 تبديل الحالة", ru: "🔄 Переключить статус",
        id: "🔄 Ubah status", pt: "🔄 Alternar status", es: "🔄 Cambiar estado", tr: "🔄 Durumu değiştir",
        hi: "🔄 स्थिति बदलें", uk: "🔄 Змінити статус",
    },
    set_seconds_btn: {
        fa: "✏️ تنظیم مدت زمان (ثانیه)", en: "✏️ Set delay (seconds)", ar: "✏️ تعيين المدة (ثوانٍ)", ru: "✏️ Установить задержку (сек)",
        id: "✏️ Atur jeda (detik)", pt: "✏️ Definir atraso (segundos)", es: "✏️ Definir retraso (segundos)", tr: "✏️ Gecikmeyi ayarla (saniye)",
        hi: "✏️ देरी सेट करें (सेकंड)", uk: "✏️ Встановити затримку (сек)",
    },
    ask_seconds_prompt: {
        fa: "⏱ مدت زمان (به ثانیه) قبل از حذف فایل ارسالی به کاربر را وارد کنید:",
        en: "⏱ Enter the number of seconds before the sent file is deleted:",
        ar: "⏱ أدخل عدد الثواني قبل حذف الملف المرسل:",
        ru: "⏱ Введите количество секунд перед удалением отправленного файла:",
        id: "⏱ Masukkan jumlah detik sebelum file yang dikirim dihapus:",
        pt: "⏱ Digite o número de segundos antes que o arquivo enviado seja excluído:",
        es: "⏱ Ingresa el número de segundos antes de eliminar el archivo enviado:",
        tr: "⏱ Gönderilen dosyanın silinmesinden önceki saniye sayısını girin:",
        hi: "⏱ भेजी गई फ़ाइल हटाए जाने से पहले के सेकंड दर्ज करें:",
        uk: "⏱ Введіть кількість секунд перед видаленням надісланого файлу:",
    },
    seconds_invalid: {
        fa: "⚠️ لطفاً یک عدد معتبر (بزرگ‌تر از صفر) وارد کنید.", en: "⚠️ Please enter a valid number greater than zero.",
        ar: "⚠️ يرجى إدخال رقم صالح أكبر من الصفر.", ru: "⚠️ Пожалуйста, введите корректное число больше нуля.",
        id: "⚠️ Silakan masukkan angka valid lebih besar dari nol.", pt: "⚠️ Digite um número válido maior que zero.",
        es: "⚠️ Introduce un número válido mayor que cero.", tr: "⚠️ Lütfen sıfırdan büyük geçerli bir sayı girin.",
        hi: "⚠️ कृपया शून्य से बड़ी वैध संख्या दर्ज करें।", uk: "⚠️ Будь ласка, введіть дійсне число більше нуля.",
    },
    seconds_set_success: {
        fa: "✅ مدت زمان روی {seconds} ثانیه تنظیم شد.", en: "✅ Delay set to {seconds} seconds.",
        ar: "✅ تم ضبط المدة على {seconds} ثانية.", ru: "✅ Задержка установлена на {seconds} сек.",
        id: "✅ Jeda diatur ke {seconds} detik.", pt: "✅ Atraso definido para {seconds} segundos.",
        es: "✅ Retraso configurado en {seconds} segundos.", tr: "✅ Gecikme {seconds} saniye olarak ayarlandı.",
        hi: "✅ देरी {seconds} सेकंड पर सेट की गई।", uk: "✅ Затримку встановлено на {seconds} с.",
    },
};
function _0xQ6(_0xQ7, _0xQ8, _0xQ9 = {}) {
    const _0xQa = _0xQ5[_0xQ8];
    if (!_0xQa)
        return _0xQ8;
    let _0xQb = _0xQa[_0xQ7] || _0xQa[_0xQ4] || _0xQa.en || _0xQ8;
    for (const [_0xQc, _0xQd] of Object.entries(_0xQ9))
        _0xQb = _0xQb.replaceAll(`{${_0xQc}}`, _0xQd);
    return _0xQb;
}
async function _0xQe(_0xQf, _0xQ10, _0xQ11) {
    const _0xQ12 = await fetch(`${_0xQ1(_0xQf.BOT_TOKEN)}/${_0xQ10}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_0xQ11),
    });
    const _0xQ13 = await _0xQ12.json();
    if (!_0xQ13.ok)
        console.log(`TG API error [${_0xQ10}]:`, JSON.stringify(_0xQ13));
    return _0xQ13;
}
const _0xQ14 = (_0xQ15, _0xQ16, _0xQ17, _0xQ18 = {}) => _0xQe(_0xQ15, "sendMessage", { chat_id: _0xQ16, text: _0xQ17, parse_mode: "HTML", disable_web_page_preview: true, ..._0xQ18 });
const _0xQ19 = (_0xQ1a, _0xQ1b, _0xQ1c, _0xQ1d, _0xQ1e = {}) => _0xQe(_0xQ1a, "editMessageText", { chat_id: _0xQ1b, message_id: _0xQ1c, text: _0xQ1d, parse_mode: "HTML", disable_web_page_preview: true, ..._0xQ1e });
const _0xQ1f = (_0xQ20, _0xQ21, _0xQ22 = "", _0xQ23 = false) => _0xQe(_0xQ20, "answerCallbackQuery", { callback_query_id: _0xQ21, text: _0xQ22, show_alert: _0xQ23 });
function _0xQ24(_0xQ25 = 8) {
    const _0xQ26 = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
    let _0xQ27 = "";
    const _0xQ28 = crypto.getRandomValues(new Uint8Array(_0xQ25));
    for (let _0xQ29 = 0; _0xQ29 < _0xQ25; _0xQ29++)
        _0xQ27 += _0xQ26[_0xQ28[_0xQ29] % _0xQ26.length];
    return _0xQ27;
}
function _0xQ2a(_0xQ2b) { return new Promise((_0xQ2c) => setTimeout(_0xQ2c, _0xQ2b)); }
async function _0xQ2d(_0xQ2e) {
    const { results: _0xQ2f } = await _0xQ2e.DB.prepare("SELECT key, value FROM config").all();
    const _0xQ30 = {};
    for (const _0xQ31 of _0xQ2f)
        _0xQ30[_0xQ31.key] = _0xQ31.value;
    return {
        storage_channel: _0xQ30.storage_channel ? JSON.parse(_0xQ30.storage_channel) : null,
        admins: _0xQ30.admins ? JSON.parse(_0xQ30.admins) : [],
        lock_channel: _0xQ30.lock_channel ? JSON.parse(_0xQ30.lock_channel) : null,
        caption_template: _0xQ30.caption_template || null,
        custom_buttons: _0xQ30.custom_buttons ? JSON.parse(_0xQ30.custom_buttons) : [],
        upload_restricted: _0xQ30.upload_restricted === "1",
        bot_username: _0xQ30.bot_username || null,
        autodelete_enabled: _0xQ30.autodelete_enabled === "1",
        autodelete_seconds: _0xQ30.autodelete_seconds ? Number(_0xQ30.autodelete_seconds) : 30,
    };
}
async function _0xQ32(_0xQ33, _0xQ34, _0xQ35) {
    const _0xQ36 = typeof _0xQ35 === "string" ? _0xQ35 : JSON.stringify(_0xQ35);
    await _0xQ33.DB.prepare("INSERT INTO config (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value").bind(_0xQ34, _0xQ36).run();
}
function _0xQ37(_0xQ38, _0xQ39) {
    const _0xQ3a = [..._0xQ38.admins];
    const _0xQ3b = Number(_0xQ39.OWNER_ID);
    if (!_0xQ3a.includes(_0xQ3b))
        _0xQ3a.push(_0xQ3b);
    return _0xQ3a;
}
function _0xQ3c(_0xQ3d, _0xQ3e, _0xQ3f) { return _0xQ37(_0xQ3d, _0xQ3e).includes(Number(_0xQ3f)); }
function _0xQ40(_0xQ41, _0xQ42) { return Number(_0xQ42) === Number(_0xQ41.OWNER_ID); }
async function _0xQ43(_0xQ44, _0xQ45) {
    const _0xQ46 = await _0xQ44.DB.prepare("SELECT * FROM users WHERE id = ?").bind(_0xQ45).first();
    if (_0xQ46)
        return { record: _0xQ46, isNew: false };
    await _0xQ44.DB.prepare("INSERT INTO users (id, lang, is_banned, joined_at) VALUES (?, NULL, 0, ?)").bind(_0xQ45, Date.now()).run();
    await _0xQ4b(_0xQ44, "users_count");
    return { record: { id: _0xQ45, lang: null, is_banned: 0, joined_at: Date.now() }, isNew: true };
}
async function _0xQ47(_0xQ48, _0xQ49, _0xQ4a) {
    await _0xQ48.DB.prepare("UPDATE users SET lang = ? WHERE id = ?").bind(_0xQ4a, _0xQ49).run();
}
async function _0xQ4b(_0xQ4c, _0xQ4d, _0xQ4e = 1) {
    await _0xQ4c.DB.prepare("INSERT INTO stats (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = value + ?").bind(_0xQ4d, _0xQ4e, _0xQ4e).run();
}
async function _0xQ4f(_0xQ50) {
    const { results: _0xQ51 } = await _0xQ50.DB.prepare("SELECT key, value FROM stats").all();
    const _0xQ52 = {};
    for (const _0xQ53 of _0xQ51)
        _0xQ52[_0xQ53.key] = _0xQ53.value;
    return { users: _0xQ52.users_count || 0, files: _0xQ52.files_count || 0, uploads: _0xQ52.uploads_count || 0, downloads: _0xQ52.downloads_count || 0 };
}
async function _0xQ54(_0xQ55, _0xQ56) {
    const _0xQ57 = await _0xQ55.DB.prepare("SELECT last_ts FROM rate_limit WHERE user_id = ?").bind(_0xQ56).first();
    const _0xQ58 = Date.now();
    if (_0xQ57 && _0xQ58 - _0xQ57.last_ts < 2000)
        return true;
    await _0xQ55.DB.prepare("INSERT INTO rate_limit (user_id, last_ts) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET last_ts = excluded.last_ts").bind(_0xQ56, _0xQ58).run();
    return false;
}
async function _0xQ59(_0xQ5a, _0xQ5b) {
    const _0xQ5c = await _0xQ5a.DB.prepare("SELECT state, updated_at FROM admin_state WHERE user_id = ?").bind(_0xQ5b).first();
    if (!_0xQ5c)
        return null;
    if (Date.now() - _0xQ5c.updated_at > 600000) {
        await _0xQ5a.DB.prepare("DELETE FROM admin_state WHERE user_id = ?").bind(_0xQ5b).run();
        return null;
    }
    return JSON.parse(_0xQ5c.state);
}
async function _0xQ5d(_0xQ5e, _0xQ5f, _0xQ60) {
    if (_0xQ60 === null) {
        await _0xQ5e.DB.prepare("DELETE FROM admin_state WHERE user_id = ?").bind(_0xQ5f).run();
        return;
    }
    await _0xQ5e.DB.prepare("INSERT INTO admin_state (user_id, state, updated_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET state = excluded.state, updated_at = excluded.updated_at").bind(_0xQ5f, JSON.stringify(_0xQ60), Date.now()).run();
}
async function _0xQ61(_0xQ62, _0xQ63, _0xQ64) {
    await _0xQ62.DB.prepare("INSERT INTO pending_download (user_id, code, expires_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET code = excluded.code, expires_at = excluded.expires_at").bind(_0xQ63, _0xQ64, Date.now() + 900000).run();
}
async function _0xQ65(_0xQ66, _0xQ67) {
    const _0xQ68 = await _0xQ66.DB.prepare("SELECT code, expires_at FROM pending_download WHERE user_id = ?").bind(_0xQ67).first();
    await _0xQ66.DB.prepare("DELETE FROM pending_download WHERE user_id = ?").bind(_0xQ67).run();
    if (!_0xQ68 || Date.now() > _0xQ68.expires_at)
        return null;
    return _0xQ68.code;
}
async function _0xQ69(_0xQ6a, _0xQ6b, _0xQ6c) {
    if (!_0xQ6b.lock_channel)
        return true;
    const _0xQ6d = await _0xQe(_0xQ6a, "getChatMember", { chat_id: _0xQ6b.lock_channel.id, user_id: _0xQ6c });
    if (!_0xQ6d.ok)
        return false;
    return ["creator", "administrator", "member"].includes(_0xQ6d.result.status);
}
function _0xQ6e(_0xQ6f) {
    const _0xQ70 = _0xQ6f.username ? `https://t.me/${_0xQ6f.username}` : null;
    const _0xQ71 = [];
    if (_0xQ70)
        _0xQ71.push([{ text: "📢 " + (_0xQ6f.title || "Channel"), url: _0xQ70 }]);
    _0xQ71.push([{ text: "✅ Check again", callback_data: "recheck_join" }]);
    return { inline_keyboard: _0xQ71 };
}
function _0xQ72(_0xQ73) {
    if (_0xQ73.document)
        return { type: "document", name: _0xQ73.document.file_name, size: _0xQ73.document.file_size };
    if (_0xQ73.video)
        return { type: "video", name: _0xQ73.video.file_name || "video.mp4", size: _0xQ73.video.file_size };
    if (_0xQ73.audio)
        return { type: "audio", name: _0xQ73.audio.file_name || "audio.mp3", size: _0xQ73.audio.file_size };
    if (_0xQ73.photo)
        return { type: "photo", name: "photo.jpg", size: _0xQ73.photo.at(-1)?.file_size };
    if (_0xQ73.voice)
        return { type: "voice", name: "voice.ogg", size: _0xQ73.voice.file_size };
    return null;
}
function _0xQ74(_0xQ75) {
    if (!_0xQ75)
        return "-";
    const _0xQ76 = ["B", "KB", "MB", "GB"];
    let _0xQ77 = 0, _0xQ78 = _0xQ75;
    while (_0xQ78 >= 1024 && _0xQ77 < _0xQ76.length - 1) {
        _0xQ78 /= 1024;
        _0xQ77++;
    }
    return `${_0xQ78.toFixed(1)} ${_0xQ76[_0xQ77]}`;
}
function _0xQ79(_0xQ7a, _0xQ7b) {
    return _0xQ7a.replace("{filename}", _0xQ7b?.file_name || _0xQ7b?.name || "-").replace("{size}", _0xQ74(_0xQ7b?.file_size ?? _0xQ7b?.size));
}
function _0xQ7c(_0xQ7d, _0xQ7e) {
    const _0xQ7f = (_0xQ7e.caption || "").trim();
    if (!_0xQ7d.caption_template)
        return _0xQ7f || undefined;
    const _0xQ80 = _0xQ79(_0xQ7d.caption_template, _0xQ7e);
    return _0xQ7f ? `${_0xQ7f}\n\n${_0xQ80}` : _0xQ80;
}
async function _0xQ81(_0xQ82, _0xQ83) { return await _0xQ82.DB.prepare("SELECT * FROM files WHERE code = ?").bind(_0xQ83).first(); }
async function _0xQ84(_0xQ85, _0xQ86, _0xQ87) {
    await _0xQ85.DB.prepare(`INSERT INTO files (code, channel_msg_id, file_type, file_name, file_size, caption, uploader_id, created_at, downloads)
     VALUES (?,?,?,?,?,?,?,?,0)`).bind(_0xQ86, _0xQ87.channel_msg_id, _0xQ87.file_type, _0xQ87.file_name, _0xQ87.file_size, _0xQ87.caption, _0xQ87.uploader_id, _0xQ87.created_at).run();
}
async function _0xQ88(_0xQ89, _0xQ8a) {
    await _0xQ89.DB.prepare("UPDATE files SET downloads = downloads + 1 WHERE code = ?").bind(_0xQ8a).run();
}
async function _0xQ8b(_0xQ8c, _0xQ8d) { await _0xQ8c.DB.prepare("DELETE FROM files WHERE code = ?").bind(_0xQ8d).run(); }
function _0xQ8e(_0xQ8f, _0xQ90, _0xQ91, _0xQ92) {
    const _0xQ93 = _0xQ3c(_0xQ8f, _0xQ90, _0xQ91);
    const _0xQ94 = [];
    if (_0xQ93)
        _0xQ94.push([_0xQ6(_0xQ92, "admin_panel_btn"), _0xQ6(_0xQ92, "change_lang_btn")]);
    else
        _0xQ94.push([_0xQ6(_0xQ92, "change_lang_btn")]);
    return { keyboard: _0xQ94, resize_keyboard: true, is_persistent: true };
}
function _0xQ95(_0xQ96) {
    if (!_0xQ96.length)
        return null;
    const _0xQ97 = [];
    for (let _0xQ98 = 0; _0xQ98 < _0xQ96.length; _0xQ98 += 2) {
        _0xQ97.push(_0xQ96.slice(_0xQ98, _0xQ98 + 2).map((_0xQ99) => {
            const _0xQ9a = _0xQ99.type === "url" ? { text: _0xQ99.label, url: _0xQ99.value } : { text: _0xQ99.label, callback_data: `custombtn_${_0xQ99.id}` };
            if (_0xQ99.color)
                _0xQ9a.style = _0xQ99.color;
            return _0xQ9a;
        }));
    }
    return { inline_keyboard: _0xQ97 };
}
function _0xQ9b() {
    const _0xQ9c = Object.keys(_0xQ3);
    const _0xQ9d = [];
    for (let _0xQ9e = 0; _0xQ9e < _0xQ9c.length; _0xQ9e += 2) {
        _0xQ9d.push(_0xQ9c.slice(_0xQ9e, _0xQ9e + 2).map((_0xQ9f) => ({ text: `${_0xQ3[_0xQ9f].flag} ${_0xQ3[_0xQ9f].name}`, callback_data: `setlang_${_0xQ9f}` })));
    }
    return { inline_keyboard: _0xQ9d };
}
async function _0xQa0(_0xQa1, _0xQa2, _0xQa3, _0xQa4) {
    const _0xQa5 = _0xQa3.chat.id;
    const _0xQa6 = _0xQa3.from.id;
    if (_0xQa2.upload_restricted && !_0xQ3c(_0xQa2, _0xQa1, _0xQa6)) {
        return _0xQ14(_0xQa1, _0xQa5, _0xQ6(_0xQa4, "upload_restricted_msg"));
    }
    if (!_0xQa2.storage_channel)
        return _0xQ14(_0xQa1, _0xQa5, _0xQ6(_0xQa4, "storage_not_set"));
    const _0xQa7 = _0xQ72(_0xQa3);
    if (!_0xQa7)
        return;
    const _0xQa8 = await _0xQe(_0xQa1, "copyMessage", { chat_id: _0xQa2.storage_channel.id, from_chat_id: _0xQa5, message_id: _0xQa3.message_id });
    if (!_0xQa8.ok)
        return _0xQ14(_0xQa1, _0xQa5, _0xQ6(_0xQa4, "upload_failed"));
    const _0xQa9 = _0xQa8.result.message_id;
    const _0xQaa = _0xQ24(8);
    await _0xQ84(_0xQa1, _0xQaa, {
        channel_msg_id: _0xQa9,
        file_type: _0xQa7.type,
        file_name: _0xQa7.name,
        file_size: _0xQa7.size,
        caption: _0xQa3.caption || "",
        uploader_id: _0xQa6,
        created_at: Date.now(),
    });
    await _0xQ4b(_0xQa1, "files_count");
    await _0xQ4b(_0xQa1, "uploads_count");
    const _0xQab = `https://t.me/${_0xQa2.bot_username}?start=${_0xQaa}`;
    await _0xQ14(_0xQa1, _0xQa5, `${_0xQ6(_0xQa4, "file_saved")}\n\n📄 <b>${_0xQa7.name}</b>\n📦 ${_0xQ74(_0xQa7.size)}\n🔗 <code>${_0xQaa}</code>\n\n${_0xQab}`, { reply_markup: { inline_keyboard: [[{ text: _0xQ6(_0xQa4, "share_btn"), switch_inline_query: _0xQaa }]] } });
}
async function _0xQac(_0xQad, _0xQae, _0xQaf, _0xQb0) {
    await _0xQ2a(_0xQb0 * 1000);
    await _0xQe(_0xQad, "deleteMessage", { chat_id: _0xQae, message_id: _0xQaf });
}
async function _0xQb1(_0xQb2, _0xQb3, _0xQb4, _0xQb5, _0xQb6, _0xQb7, _0xQb8) {
    const _0xQb9 = await _0xQ81(_0xQb2, _0xQb7);
    if (!_0xQb9)
        return _0xQ14(_0xQb2, _0xQb5, _0xQ6(_0xQb8, "file_not_found"));
    const _0xQba = await _0xQ69(_0xQb2, _0xQb3, _0xQb6);
    if (!_0xQba) {
        await _0xQ61(_0xQb2, _0xQb6, _0xQb7);
        return _0xQ14(_0xQb2, _0xQb5, _0xQ6(_0xQb8, "need_join_msg"), { reply_markup: _0xQ6e(_0xQb3.lock_channel) });
    }
    const _0xQbb = _0xQ7c(_0xQb3, _0xQb9);
    const _0xQbc = { chat_id: _0xQb5, from_chat_id: _0xQb3.storage_channel.id, message_id: _0xQb9.channel_msg_id };
    if (_0xQbb !== undefined) {
        _0xQbc.caption = _0xQbb;
        _0xQbc.parse_mode = "HTML";
    }
    const _0xQbd = await _0xQe(_0xQb2, "copyMessage", _0xQbc);
    if (!_0xQbd.ok)
        return _0xQ14(_0xQb2, _0xQb5, _0xQ6(_0xQb8, "download_failed"));
    await _0xQ88(_0xQb2, _0xQb7);
    await _0xQ4b(_0xQb2, "downloads_count");
    if (_0xQb3.autodelete_enabled && _0xQb4) {
        _0xQb4.waitUntil(_0xQac(_0xQb2, _0xQb5, _0xQbd.result.message_id, _0xQb3.autodelete_seconds));
    }
}
function _0xQbe(_0xQbf, _0xQc0) {
    const _0xQc1 = _0xQbf.upload_restricted;
    return {
        inline_keyboard: [
            [{ text: _0xQ6(_0xQc0, "adm_set_storage_btn"), callback_data: "adm_set_storage" }],
            [{ text: _0xQ6(_0xQc0, "adm_set_lock_btn"), callback_data: "adm_set_lock" }, { text: _0xQ6(_0xQc0, "adm_del_lock_btn"), callback_data: "adm_del_lock" }],
            [{ text: _0xQ6(_0xQc0, "adm_stats_btn"), callback_data: "adm_stats" }],
            [{ text: _0xQ6(_0xQc0, "adm_set_caption_btn"), callback_data: "adm_set_caption" }],
            [{ text: _0xQ6(_0xQc0, "adm_manage_admins_btn"), callback_data: "adm_manage_admins" }],
            [{ text: _0xQ6(_0xQc0, "adm_search_file_btn"), callback_data: "adm_search_file" }],
            [{ text: _0xQc1 ? _0xQ6(_0xQc0, "adm_allow_all_btn") : _0xQ6(_0xQc0, "adm_restrict_btn"), callback_data: "adm_toggle_upload" }],
            [{ text: _0xQ6(_0xQc0, "adm_menu_buttons_btn"), callback_data: "adm_menu_buttons" }],
            [{ text: _0xQ6(_0xQc0, "adm_autodelete_btn"), callback_data: "adm_autodelete_menu" }],
        ],
    };
}
function _0xQc2(_0xQc3) {
    const _0xQc4 = [
        { label: _0xQ6(_0xQc3, "color_primary"), value: "primary" },
        { label: _0xQ6(_0xQc3, "color_success"), value: "success" },
        { label: _0xQ6(_0xQc3, "color_danger"), value: "danger" },
        { label: _0xQ6(_0xQc3, "color_default"), value: "" },
    ];
    const _0xQc5 = _0xQc4.map((_0xQc6) => [{ text: _0xQc6.label, callback_data: `pickcolor_${_0xQc6.value || "none"}` }]);
    _0xQc5.push([{ text: _0xQ6(_0xQc3, "back_btn"), callback_data: "adm_back" }]);
    return { inline_keyboard: _0xQc5 };
}
function _0xQc7(_0xQc8, _0xQc9) {
    const _0xQca = _0xQc8.custom_buttons.map((_0xQcb) => [{ text: `🗑 ${_0xQcb.color || ""} ${_0xQcb.label}`, callback_data: `delbtn_${_0xQcb.id}` }]);
    _0xQca.push([{ text: _0xQ6(_0xQc9, "add_button_btn"), callback_data: "adm_addbtn" }]);
    _0xQca.push([{ text: _0xQ6(_0xQc9, "back_btn"), callback_data: "adm_back" }]);
    return { inline_keyboard: _0xQca };
}
function _0xQcc(_0xQcd, _0xQce) {
    return {
        inline_keyboard: [
            [{ text: _0xQ6(_0xQce, "toggle_autodelete_btn"), callback_data: "adm_toggle_autodelete" }],
            [{ text: _0xQ6(_0xQce, "set_seconds_btn"), callback_data: "adm_set_autodelete_seconds" }],
            [{ text: _0xQ6(_0xQce, "back_btn"), callback_data: "adm_back" }],
        ],
    };
}
function _0xQcf(_0xQd0, _0xQd1) {
    return _0xQ6(_0xQd1, "autodelete_menu_title", {
        status: _0xQd0.autodelete_enabled ? _0xQ6(_0xQd1, "autodelete_on") : _0xQ6(_0xQd1, "autodelete_off"),
        seconds: _0xQd0.autodelete_seconds,
        warning: _0xQ6(_0xQd1, "autodelete_warning"),
    });
}
async function _0xQd2(_0xQd3, _0xQd4, _0xQd5, _0xQd6, _0xQd7) {
    if (!_0xQ3c(_0xQd4, _0xQd3, _0xQd6))
        return _0xQ14(_0xQd3, _0xQd5, _0xQ6(_0xQd7, "access_denied"));
    return _0xQ14(_0xQd3, _0xQd5, _0xQ6(_0xQd7, "admin_panel_title"), { reply_markup: _0xQbe(_0xQd4, _0xQd7) });
}
async function _0xQd8(_0xQd9, _0xQda, _0xQdb) {
    const _0xQdc = _0xQdb.from.id;
    const _0xQdd = _0xQdb.message.chat.id;
    const _0xQde = _0xQdb.message.message_id;
    const _0xQdf = _0xQdb.data;
    const _0xQe0 = _0xQdb.from.lang || _0xQ4;
    const _0xQe1 = () => ({ inline_keyboard: [[{ text: _0xQ6(_0xQe0, "back_btn"), callback_data: "adm_back" }]] });
    if (!_0xQ3c(_0xQda, _0xQd9, _0xQdc))
        return _0xQ1f(_0xQd9, _0xQdb.id, _0xQ6(_0xQe0, "access_denied"), true);
    if (_0xQdf === "adm_back") {
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "admin_panel_title"), { reply_markup: _0xQbe(_0xQda, _0xQe0) });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_toggle_upload") {
        const _0xQe2 = !_0xQda.upload_restricted;
        await _0xQ32(_0xQd9, "upload_restricted", _0xQe2 ? "1" : "0");
        _0xQda.upload_restricted = _0xQe2;
        await _0xQ1f(_0xQd9, _0xQdb.id, _0xQe2 ? _0xQ6(_0xQe0, "toggle_restricted_toast") : _0xQ6(_0xQe0, "toggle_open_toast"));
        return _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "admin_panel_title"), { reply_markup: _0xQbe(_0xQda, _0xQe0) });
    }
    if (_0xQdf === "adm_autodelete_menu") {
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQcf(_0xQda, _0xQe0), { reply_markup: _0xQcc(_0xQda, _0xQe0) });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_toggle_autodelete") {
        const _0xQe3 = !_0xQda.autodelete_enabled;
        await _0xQ32(_0xQd9, "autodelete_enabled", _0xQe3 ? "1" : "0");
        _0xQda.autodelete_enabled = _0xQe3;
        await _0xQ1f(_0xQd9, _0xQdb.id);
        return _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQcf(_0xQda, _0xQe0), { reply_markup: _0xQcc(_0xQda, _0xQe0) });
    }
    if (_0xQdf === "adm_set_autodelete_seconds") {
        await _0xQ5d(_0xQd9, _0xQdc, { step: "await_autodelete_seconds" });
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "ask_seconds_prompt"), { reply_markup: _0xQe1() });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_menu_buttons") {
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "menu_buttons_title"), { reply_markup: _0xQc7(_0xQda, _0xQe0) });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_addbtn") {
        await _0xQ5d(_0xQd9, _0xQdc, { step: "await_btn_type" });
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "choose_button_type"), {
            reply_markup: { inline_keyboard: [
                    [{ text: _0xQ6(_0xQe0, "type_url_btn"), callback_data: "btntype_url" }, { text: _0xQ6(_0xQe0, "type_text_btn"), callback_data: "btntype_text" }],
                    [{ text: _0xQ6(_0xQe0, "back_btn"), callback_data: "adm_back" }],
                ] },
        });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "btntype_url" || _0xQdf === "btntype_text") {
        const _0xQe4 = _0xQdf === "btntype_url" ? "url" : "text";
        await _0xQ5d(_0xQd9, _0xQdc, { step: "await_btn_label", type: _0xQe4 });
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "label_prompt"), { reply_markup: _0xQe1() });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf.startsWith("pickcolor_")) {
        const _0xQe5 = _0xQdf.replace("pickcolor_", "");
        const _0xQe6 = _0xQe5 === "none" ? "" : _0xQe5;
        const _0xQe7 = await _0xQ59(_0xQd9, _0xQdc);
        if (!_0xQe7 || _0xQe7.step !== "await_btn_color")
            return _0xQ1f(_0xQd9, _0xQdb.id);
        const _0xQe8 = [..._0xQda.custom_buttons, { id: _0xQ24(6), label: _0xQe7.label, type: _0xQe7.type, value: _0xQe7.value, color: _0xQe6 }];
        await _0xQ32(_0xQd9, "custom_buttons", _0xQe8);
        _0xQda.custom_buttons = _0xQe8;
        await _0xQ5d(_0xQd9, _0xQdc, null);
        await _0xQ1f(_0xQd9, _0xQdb.id, _0xQ6(_0xQe0, "button_added_toast"));
        return _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "menu_buttons_title"), { reply_markup: _0xQc7(_0xQda, _0xQe0) });
    }
    if (_0xQdf.startsWith("delbtn_")) {
        const _0xQe9 = _0xQdf.replace("delbtn_", "");
        const _0xQea = _0xQda.custom_buttons.filter((_0xQeb) => _0xQeb.id !== _0xQe9);
        await _0xQ32(_0xQd9, "custom_buttons", _0xQea);
        _0xQda.custom_buttons = _0xQea;
        await _0xQ1f(_0xQd9, _0xQdb.id, _0xQ6(_0xQe0, "deleted_toast"));
        return _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "menu_buttons_title"), { reply_markup: _0xQc7(_0xQda, _0xQe0) });
    }
    if (_0xQdf === "adm_set_storage") {
        await _0xQ5d(_0xQd9, _0xQdc, { step: "await_storage_forward" });
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "storage_forward_prompt"), { reply_markup: _0xQe1() });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_set_lock") {
        await _0xQ5d(_0xQd9, _0xQdc, { step: "await_lock_forward" });
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "lock_forward_prompt"), { reply_markup: _0xQe1() });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_del_lock") {
        await _0xQ32(_0xQd9, "lock_channel", "");
        _0xQda.lock_channel = null;
        await _0xQ1f(_0xQd9, _0xQdb.id, _0xQ6(_0xQe0, "lock_removed_toast"));
        return _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "admin_panel_title"), { reply_markup: _0xQbe(_0xQda, _0xQe0) });
    }
    if (_0xQdf === "adm_stats") {
        const _0xQec = await _0xQ4f(_0xQd9);
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "stats_title", _0xQec), { reply_markup: _0xQe1() });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_set_caption") {
        await _0xQ5d(_0xQd9, _0xQdc, { step: "await_caption_text" });
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "caption_prompt"), { reply_markup: _0xQe1() });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_manage_admins") {
        const _0xQed = _0xQ37(_0xQda, _0xQd9);
        const _0xQee = _0xQed.map((_0xQef) => `• <code>${_0xQef}</code>`).join("\n");
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "admins_title", { list: _0xQee }), { reply_markup: { inline_keyboard: [[{ text: _0xQ6(_0xQe0, "add_admin_btn"), callback_data: "adm_add_admin" }], [{ text: _0xQ6(_0xQe0, "back_btn"), callback_data: "adm_back" }]] } });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_add_admin") {
        if (!_0xQ40(_0xQd9, _0xQdc))
            return _0xQ1f(_0xQd9, _0xQdb.id, _0xQ6(_0xQe0, "owner_only"), true);
        await _0xQ5d(_0xQd9, _0xQdc, { step: "await_new_admin_id" });
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "add_admin_prompt"), { reply_markup: _0xQe1() });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf === "adm_search_file") {
        await _0xQ5d(_0xQd9, _0xQdc, { step: "await_search_code" });
        await _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "search_prompt"), { reply_markup: _0xQe1() });
        return _0xQ1f(_0xQd9, _0xQdb.id);
    }
    if (_0xQdf.startsWith("adm_delfile_")) {
        const _0xQf0 = _0xQdf.replace("adm_delfile_", "");
        await _0xQ8b(_0xQd9, _0xQf0);
        await _0xQ1f(_0xQd9, _0xQdb.id, _0xQ6(_0xQe0, "file_deleted_toast"), true);
        return _0xQ19(_0xQd9, _0xQdd, _0xQde, _0xQ6(_0xQe0, "admin_panel_title"), { reply_markup: _0xQbe(_0xQda, _0xQe0) });
    }
    return _0xQ1f(_0xQd9, _0xQdb.id);
}
async function _0xQf1(_0xQf2, _0xQf3, _0xQf4, _0xQf5) {
    const _0xQf6 = _0xQf4.from.id;
    const _0xQf7 = _0xQf4.chat.id;
    const _0xQf8 = await _0xQ59(_0xQf2, _0xQf6);
    if (!_0xQf8)
        return false;
    if (_0xQf8.step === "await_storage_forward") {
        const _0xQf9 = _0xQf4.forward_from_chat;
        if (!_0xQf9) {
            await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "storage_need_forward"));
            return true;
        }
        const _0xQfa = await _0xQe(_0xQf2, "getMe", {});
        const _0xQfb = await _0xQe(_0xQf2, "getChatMember", { chat_id: _0xQf9.id, user_id: _0xQfa.result.id });
        if (!_0xQfb.ok || !["administrator", "creator"].includes(_0xQfb.result.status)) {
            await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "storage_need_admin"));
            return true;
        }
        await _0xQ32(_0xQf2, "storage_channel", { id: _0xQf9.id, title: _0xQf9.title || "storage" });
        await _0xQ5d(_0xQf2, _0xQf6, null);
        await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "storage_set_success", { title: _0xQf9.title || _0xQf9.id }));
        return true;
    }
    if (_0xQf8.step === "await_lock_forward") {
        const _0xQfc = _0xQf4.forward_from_chat;
        if (!_0xQfc) {
            await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "storage_need_forward"));
            return true;
        }
        await _0xQ32(_0xQf2, "lock_channel", { id: _0xQfc.id, username: _0xQfc.username || null, title: _0xQfc.title });
        await _0xQ5d(_0xQf2, _0xQf6, null);
        await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "lock_set_success", { title: _0xQfc.title }));
        return true;
    }
    if (_0xQf8.step === "await_caption_text") {
        await _0xQ32(_0xQf2, "caption_template", _0xQf4.text);
        await _0xQ5d(_0xQf2, _0xQf6, null);
        await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "caption_updated"));
        return true;
    }
    if (_0xQf8.step === "await_new_admin_id") {
        const _0xQfd = Number(_0xQf4.text.trim());
        if (!_0xQfd || isNaN(_0xQfd)) {
            await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "invalid_id"));
            return true;
        }
        const _0xQfe = _0xQ37(_0xQf3, _0xQf2);
        if (!_0xQfe.includes(_0xQfd))
            _0xQfe.push(_0xQfd);
        await _0xQ32(_0xQf2, "admins", _0xQfe);
        await _0xQ5d(_0xQf2, _0xQf6, null);
        await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "admin_added", { id: _0xQfd }));
        return true;
    }
    if (_0xQf8.step === "await_search_code") {
        const _0xQff = _0xQf4.text.trim();
        const _0xQ100 = await _0xQ81(_0xQf2, _0xQff);
        await _0xQ5d(_0xQf2, _0xQf6, null);
        if (!_0xQ100) {
            await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "search_not_found"));
            return true;
        }
        await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "file_info", { name: _0xQ100.file_name, size: _0xQ74(_0xQ100.file_size), downloads: _0xQ100.downloads, caption: _0xQ100.caption || "-" }), { reply_markup: { inline_keyboard: [[{ text: _0xQ6(_0xQf5, "delete_file_btn"), callback_data: `adm_delfile_${_0xQff}` }]] } });
        return true;
    }
    if (_0xQf8.step === "await_btn_label") {
        await _0xQ5d(_0xQf2, _0xQf6, { step: "await_btn_value", type: _0xQf8.type, label: _0xQf4.text.trim() });
        await _0xQ14(_0xQf2, _0xQf7, _0xQf8.type === "url" ? _0xQ6(_0xQf5, "url_prompt") : _0xQ6(_0xQf5, "text_prompt"));
        return true;
    }
    if (_0xQf8.step === "await_btn_value") {
        await _0xQ5d(_0xQf2, _0xQf6, { step: "await_btn_color", type: _0xQf8.type, label: _0xQf8.label, value: _0xQf4.text.trim() });
        await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "color_prompt"), { reply_markup: _0xQc2(_0xQf5) });
        return true;
    }
    if (_0xQf8.step === "await_autodelete_seconds") {
        const _0xQ101 = Number(_0xQf4.text.trim());
        if (!_0xQ101 || isNaN(_0xQ101) || _0xQ101 <= 0) {
            await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "seconds_invalid"));
            return true;
        }
        await _0xQ32(_0xQf2, "autodelete_seconds", String(Math.round(_0xQ101)));
        await _0xQ5d(_0xQf2, _0xQf6, null);
        await _0xQ14(_0xQf2, _0xQf7, _0xQ6(_0xQf5, "seconds_set_success", { seconds: Math.round(_0xQ101) }));
        return true;
    }
    return false;
}
async function _0xQ102(_0xQ103, _0xQ104, _0xQ105, _0xQ106, _0xQ107) {
    await _0xQ14(_0xQ103, _0xQ105, _0xQ6(_0xQ107, "welcome"), { reply_markup: _0xQ8e(_0xQ104, _0xQ103, _0xQ106, _0xQ107) });
    const _0xQ108 = _0xQ95(_0xQ104.custom_buttons);
    if (_0xQ108)
        await _0xQ14(_0xQ103, _0xQ105, "—", { reply_markup: _0xQ108 });
}
async function _0xQ109(_0xQ10a, _0xQ10b, _0xQ10c) {
    const _0xQ10d = await _0xQ2d(_0xQ10a);
    if (_0xQ10c.callback_query) {
        const _0xQ10e = _0xQ10c.callback_query;
        const _0xQ10f = _0xQ10e.from.id;
        const _0xQ110 = await _0xQ10a.DB.prepare("SELECT lang FROM users WHERE id = ?").bind(_0xQ10f).first();
        const _0xQ111 = (_0xQ110 && _0xQ110.lang) || _0xQ4;
        if (_0xQ10e.data.startsWith("setlang_")) {
            const _0xQ112 = _0xQ10e.data.replace("setlang_", "");
            await _0xQ47(_0xQ10a, _0xQ10f, _0xQ112);
            await _0xQ1f(_0xQ10a, _0xQ10e.id, _0xQ6(_0xQ112, "language_set"));
            await _0xQ102(_0xQ10a, _0xQ10d, _0xQ10e.message.chat.id, _0xQ10f, _0xQ112);
            return;
        }
        if (_0xQ10e.data === "recheck_join") {
            const _0xQ113 = await _0xQ69(_0xQ10a, _0xQ10d, _0xQ10f);
            if (!_0xQ113)
                return _0xQ1f(_0xQ10a, _0xQ10e.id, _0xQ6(_0xQ111, "membership_failed"), true);
            await _0xQ1f(_0xQ10a, _0xQ10e.id, _0xQ6(_0xQ111, "membership_confirmed"));
            const _0xQ114 = await _0xQ65(_0xQ10a, _0xQ10f);
            if (_0xQ114)
                await _0xQb1(_0xQ10a, _0xQ10d, _0xQ10b, _0xQ10e.message.chat.id, _0xQ10f, _0xQ114, _0xQ111);
            return;
        }
        if (_0xQ10e.data.startsWith("custombtn_")) {
            const _0xQ115 = _0xQ10e.data.replace("custombtn_", "");
            const _0xQ116 = _0xQ10d.custom_buttons.find((_0xQ117) => _0xQ117.id === _0xQ115);
            await _0xQ1f(_0xQ10a, _0xQ10e.id);
            if (_0xQ116)
                await _0xQ14(_0xQ10a, _0xQ10e.message.chat.id, _0xQ116.value);
            return;
        }
        if (_0xQ11f(_0xQ10e.data)) {
            return _0xQ121(_0xQ10a, _0xQ10d, _0xQ10e, _0xQ111);
        }
        return _0xQ1f(_0xQ10a, _0xQ10e.id);
    }
    const _0xQ118 = _0xQ10c.message;
    if (!_0xQ118 || !_0xQ118.from)
        return;
    const _0xQ119 = _0xQ118.from.id;
    const _0xQ11a = _0xQ118.chat.id;
    if (_0xQ118.chat.type !== "private")
        return;
    if (await _0xQ54(_0xQ10a, _0xQ119))
        return;
    const { record: _0xQ11b } = await _0xQ43(_0xQ10a, _0xQ119);
    if (!_0xQ11b.lang) {
        await _0xQ14(_0xQ10a, _0xQ11a, _0xQ6(_0xQ4, "choose_language") + "\n" + _0xQ6("en", "choose_language"), { reply_markup: _0xQ9b() });
        return;
    }
    const _0xQ11c = _0xQ11b.lang;
    if (await _0xQf1(_0xQ10a, _0xQ10d, _0xQ118, _0xQ11c))
        return;
    const _0xQ11d = _0xQ118.text || "";
    if (_0xQ11d === _0xQ6(_0xQ11c, "admin_panel_btn") || _0xQ11d === "/admin")
        return _0xQd2(_0xQ10a, _0xQ10d, _0xQ11a, _0xQ119, _0xQ11c);
    if (_0xQ11d === _0xQ6(_0xQ11c, "change_lang_btn") || _0xQ11d === "/lang")
        return _0xQ14(_0xQ10a, _0xQ11a, _0xQ6(_0xQ11c, "choose_language"), { reply_markup: _0xQ9b() });
    if (_0xQ11d.startsWith("/start")) {
        const _0xQ11e = _0xQ11d.split(" ");
        if (_0xQ11e.length > 1 && _0xQ11e[1])
            return _0xQb1(_0xQ10a, _0xQ10d, _0xQ10b, _0xQ11a, _0xQ119, _0xQ11e[1].trim(), _0xQ11c);
        return _0xQ102(_0xQ10a, _0xQ10d, _0xQ11a, _0xQ119, _0xQ11c);
    }
    if (_0xQ11d === "/help")
        return _0xQ14(_0xQ10a, _0xQ11a, _0xQ6(_0xQ11c, "help_text"));
    if (_0xQ72(_0xQ118))
        return _0xQa0(_0xQ10a, _0xQ10d, _0xQ118, _0xQ11c);
}
function _0xQ11f(_0xQ120) {
    return _0xQ120.startsWith("adm_") || _0xQ120.startsWith("btntype_") || _0xQ120.startsWith("pickcolor_") || _0xQ120.startsWith("delbtn_");
}
async function _0xQ121(_0xQ122, _0xQ123, _0xQ124, _0xQ125) {
    _0xQ124.from.lang = _0xQ125;
    return _0xQd8(_0xQ122, _0xQ123, _0xQ124);
}
export default {
    async fetch(_0xQ126, _0xQ127, _0xQ128) {
        const _0xQ129 = new URL(_0xQ126.url);
        if (_0xQ126.method === "POST" && _0xQ129.pathname === `/webhook/${_0xQ127.WEBHOOK_SECRET}`) {
            try {
                const _0xQ12a = await _0xQ126.json();
                const _0xQ12b = await _0xQ127.DB.prepare("SELECT value FROM config WHERE key = 'bot_username'").first();
                if (!_0xQ12b) {
                    const _0xQ12c = await _0xQe(_0xQ127, "getMe", {});
                    await _0xQ32(_0xQ127, "bot_username", _0xQ12c.result.username);
                }
                await _0xQ109(_0xQ127, _0xQ128, _0xQ12a);
            }
            catch (_0xQ12d) {
                console.log("Error handling update:", _0xQ12d.message);
            }
            return new Response("ok");
        }
        return new Response("Telegram File-Store Bot is running.", { status: 200 });
    },
};
