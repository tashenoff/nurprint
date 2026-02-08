const whatsappNumber = '+7 747 458 9107';
const whatsappLink = 'https://wa.me/77474589107';
const phoneNumber = '87029427029';

const features = [
  {
    title: 'Выезд за 30 минут',
    desc: 'Мастер приезжает с набором расходников и инструментов, чтобы сохранить печать без пауз.',
    icon: '🚗',
  },
  {
    title: 'Глубокая чистка',
    desc: 'Разбираем картридж, меняем фотобарабан и чипы, убираем износ и полосы на принтах.',
    icon: '🛠️',
  },
  {
    title: 'Гарантия 90 дней',
    desc: 'Если качество не устроит — бесплатно устраним проблему или вернём деньги.',
    icon: '🛡️',
  },
  {
    title: 'Работаем с офисами',
    desc: 'Договор, закрывающие документы и регулярные выезды по графику.',
    icon: '🏢',
  },
];

const steps = [
  'Оставляете заявку в WhatsApp или по телефону',
  'Мы уточняем модель принтера и время выезда',
  'Мастер приезжает, заправляет, тестирует печать',
  'Отправляем фото-отчёт и закрывающие документы',
];

const plans = [
  {
    name: 'Экспресс',
    detail: 'Стандартная заправка + тестовая печать. Подходит для домашних и микробизнеса.',
    items: ['1 картридж', 'Выезд по городу', 'Чистка сопел и блока', 'Гарантия 30 дней'],
    accent: false,
  },
  {
    name: 'Офис PRO',
    detail: 'Расширенная очистка, замена фотобарабана и чипа, контроль ресурса без простоев.',
    items: ['до 3 картриджей', 'Приоритетный выезд', 'Комплектующие премиум', 'Гарантия 90 дней'],
    accent: true,
  },
  {
    name: 'Аутсорс',
    detail: 'Абонентский формат: плановый выезд, запас тонера и чипов, SLA до 4 часов.',
    items: ['Регулярные визиты', 'Мониторинг парка', 'Отчёты для бухгалтерии', 'Персональный менеджер'],
    accent: false,
  },
];

function GradientOrb({ className }) {
  return (
    <div
      className={`absolute blur-3xl opacity-60 mix-blend-screen ${className}`}
      aria-hidden="true"
    />
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 md:mb-14">
          <span className="pill mb-3">{subtitle}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display tracking-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen text-slate-50 bg-gradient-to-br from-brand-navy via-slate-950 to-brand-blue/60 relative overflow-hidden">
      <GradientOrb className="w-72 h-72 bg-brand-blue/40 -left-10 -top-16" />
      <GradientOrb className="w-96 h-96 bg-brand-yellow/40 right-10 top-20" />
      <GradientOrb className="w-80 h-80 bg-brand-blue/30 left-1/2 bottom-0" />

      <header className="sticky top-0 z-30 bg-slate-950/70 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-brand-yellow to-brand-blue shadow-glow flex items-center justify-center text-slate-900 font-black">
              NP
            </div>
            <div>
              <p className="text-sm text-white font-semibold leading-tight">NurPrint</p>
              <p className="text-xs text-slate-300">Заправка картриджей на выезде</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm font-medium">
            <a className="hover:text-brand-yellow transition" href="#services">
              Услуги
            </a>
            <a className="hover:text-brand-yellow transition" href="#pricing">
              Тарифы
            </a>
            <a className="hover:text-brand-yellow transition" href="#contacts">
              Контакты
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${phoneNumber}`}
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold hover:border-brand-yellow hover:text-brand-yellow transition"
            >
              Позвонить: {phoneNumber}
            </a>
            <a
              href={whatsappLink}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-yellow to-brand-blue text-slate-900 font-extrabold px-4 py-2 shadow-glow hover:scale-[1.02] transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="relative pb-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-grid" aria-hidden="true" />
          <div className="container mx-auto px-4 max-w-6xl pt-20 pb-16 md:pt-28 md:pb-24 relative">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div className="space-y-6">
                <div className="pill w-fit">Город — выезд за 30 минут</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-display tracking-tight">
                  Печать без пауз: <span className="text-brand-yellow">заправим</span> картриджи
                  и настроим печать
                </h1>
                <p className="text-lg text-slate-200 leading-relaxed max-w-xl">
                  Работаем с офисами, школами и типографиями. Привезём тонер, чипы и барабаны,
                  проведём глубокую чистку и дадим гарантию. Без «везите к нам» — мы приезжаем сами.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappLink}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-yellow to-brand-blue text-slate-900 font-extrabold px-5 py-3 shadow-glow hover:translate-y-[-2px] transition"
                  >
                    Написать в WhatsApp
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-slate-900">
                      {whatsappNumber}
                    </span>
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:border-brand-yellow hover:text-brand-yellow transition"
                  >
                    Позвонить: {phoneNumber}
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                  <div>
                    <p className="text-3xl font-black text-brand-yellow">12 000+</p>
                    <p>заправленных картриджей</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-brand-yellow">4.9</p>
                    <p>рейтинг по отзывам клиентов</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-brand-yellow">90 дней</p>
                    <p>гарантия на работу</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="card p-6 md:p-8">
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-yellow to-brand-blue flex items-center justify-center text-slate-900 font-black text-xl">
                      24/7
                    </div>
                    <div>
                      <p className="text-sm text-brand-yellow uppercase tracking-[0.2em] font-semibold">
                        Оперативно
                      </p>
                      <p className="text-2xl font-extrabold text-white">Мастер в пути</p>
                      <p className="text-slate-300 mt-2">
                        Свободные слоты сегодня. Уточним адрес, возьмём расходники под вашу модель,
                        проверим печать на месте.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-slate-400">WhatsApp</p>
                      <p className="text-lg font-bold text-brand-yellow">{whatsappNumber}</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <p className="text-xs text-slate-400">Телефон</p>
                      <p className="text-lg font-bold text-white">{phoneNumber}</p>
                    </div>
                    <div className="glass rounded-xl p-4 border border-white/10 col-span-2">
                      <p className="text-xs text-slate-400">Что входит</p>
                      <p className="text-sm text-slate-100">
                        Заправка, чистка, проверка качества печати, замена барабана/чипа, тест и чек.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <a
                      href={whatsappLink}
                      className="flex-1 text-center rounded-xl bg-brand-blue px-4 py-3 font-semibold hover:bg-brand-blueDark transition shadow-glow"
                    >
                      Вызвать мастера
                    </a>
                    <a
                      href="mailto:service@nurprint.kz"
                      className="flex-1 text-center rounded-xl border border-white/15 px-4 py-3 font-semibold hover:border-brand-yellow hover:text-brand-yellow transition"
                    >
                      Запросить счёт
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="services" title="Почему выбирают NurPrint" subtitle="Без пауз">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card p-5">
                <div className="flex items-center justify-between">
                  <div className="text-2xl">{feature.icon}</div>
                  <span className="w-10 h-10 rounded-full bg-white/10 border border-white/10" />
                </div>
                <h3 className="text-xl font-bold mt-4 text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="process" title="Работаем прозрачно" subtitle="4 шага">
          <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-yellow to-brand-blue" />
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={step} className="relative pl-10 md:pl-14">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-white text-slate-900 font-bold flex items-center justify-center shadow-lg shadow-brand-blue/30">
                    {idx + 1}
                  </div>
                  <div className="glass rounded-2xl border border-white/10 p-4 md:p-6">
                    <p className="text-lg font-semibold text-white">{step}</p>
                    {idx === 0 && (
                      <p className="text-sm text-slate-300 mt-2">
                        Напишите «Нужна заправка + модель принтера» — и сразу получите расчёт.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="pricing" title="Тарифы под любую нагрузку" subtitle="Подбираем формат под ваш парк">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card p-6 flex flex-col gap-4 ${
                  plan.accent ? 'border-brand-yellow/80 shadow-glow' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold text-white">{plan.name}</h3>
                  {plan.accent && (
                    <span className="pill bg-brand-yellow text-slate-900 border-none">Хит</span>
                  )}
                </div>
                <p className="text-sm text-slate-200">{plan.detail}</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-brand-yellow inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-2">
                  <a
                    href={whatsappLink}
                    className="flex-1 text-center rounded-xl bg-brand-blue px-4 py-3 font-semibold hover:bg-brand-blueDark transition"
                  >
                    Заказать
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex-1 text-center rounded-xl border border-white/15 px-4 py-3 font-semibold hover:border-brand-yellow hover:text-brand-yellow transition"
                  >
                    Уточнить детали
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contacts" title="Всегда на связи" subtitle="Контакты">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 col-span-2">
              <h3 className="text-xl font-bold text-white mb-2">Напишите или звоните</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="glass rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase">WhatsApp</p>
                  <p className="text-lg font-bold text-brand-yellow">{whatsappNumber}</p>
                  <a
                    className="text-brand-blue hover:text-brand-yellow transition text-sm"
                    href={whatsappLink}
                  >
                    Открыть чат
                  </a>
                </div>
                <div className="glass rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase">Телефон</p>
                  <p className="text-lg font-bold text-white">{phoneNumber}</p>
                  <a
                    className="text-brand-blue hover:text-brand-yellow transition text-sm"
                    href={`tel:${phoneNumber}`}
                  >
                    Позвонить
                  </a>
                </div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
                <div className="glass rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase">График</p>
                  <p className="text-slate-100">Пн–Сб, 09:00–21:00</p>
                  <p className="text-slate-400">Экстренный выезд — по договорённости</p>
                </div>
                <div className="glass rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase">Оплата</p>
                  <p className="text-slate-100">Наличные, безнал, выставляем счёт для юрлиц</p>
                </div>
              </div>
            </div>
            <div className="card p-6 bg-gradient-to-br from-brand-blue/40 to-brand-yellow/30 border border-white/10">
              <h3 className="text-xl font-extrabold text-white mb-3">Получить смету</h3>
              <p className="text-sm text-slate-100 mb-4">
                Отправьте модель принтера и сколько картриджей нужно заправить. Ответим в течение
                10 минут.
              </p>
              <div className="space-y-3 text-sm">
                <div className="glass rounded-xl p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase">Email</p>
                  <a
                    href="mailto:service@nurprint.kz"
                    className="text-white font-semibold hover:text-brand-yellow transition"
                  >
                    service@nurprint.kz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-8 bg-slate-950/80 backdrop-blur">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} NurPrint. Поддерживаем печать быстро и надежно.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-brand-yellow transition" href={whatsappLink}>
              WhatsApp {whatsappNumber}
            </a>
            <a className="hover:text-brand-yellow transition" href={`tel:${phoneNumber}`}>
              Тел: {phoneNumber}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
