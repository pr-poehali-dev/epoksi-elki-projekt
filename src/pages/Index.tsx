import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
            ✨ ЁлкаМагия
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">О производстве</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-primary animate-fade-in">
            Волшебство ручной работы
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Уникальные ёлочные игрушки из эпоксидной смолы, созданные с любовью и вниманием к каждой детали
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6">
            <a href="#gallery">Посмотреть работы</a>
          </Button>
          <div className="mt-16 relative">
            <img 
              src="https://cdn.poehali.dev/projects/eedfd6f7-0561-4ada-bbca-58800ed0b890/files/52755411-4973-4056-9ab3-c46177f2d774.jpg"
              alt="Волшебная ёлочная игрушка из эпоксидной смолы"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full animate-float"
            />
            <div className="absolute top-10 left-10 text-6xl animate-sparkle">✨</div>
            <div className="absolute bottom-10 right-10 text-6xl animate-sparkle" style={{animationDelay: '1s'}}>⭐</div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
                О производстве
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Каждая игрушка создается вручную с любовью и вниманием к деталям. Мы используем высококачественную эпоксидную смолу, натуральные пигменты и золотые акценты.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Heart" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Ручная работа</h4>
                    <p className="text-muted-foreground">Каждая игрушка уникальна и неповторима</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Премиум материалы</h4>
                    <p className="text-muted-foreground">Высококачественная смола и натуральные компоненты</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Внимание к деталям</h4>
                    <p className="text-muted-foreground">Тщательный контроль качества на каждом этапе</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/eedfd6f7-0561-4ada-bbca-58800ed0b890/files/45f6e416-db67-4e3b-aa0f-dd0a2c90d8d2.jpg"
                alt="Процесс создания игрушек"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-primary">
            Галерея работ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/eedfd6f7-0561-4ada-bbca-58800ed0b890/files/f03aafca-501b-4e70-b54a-cce3688ca2df.jpg"
                      alt={`Игрушка ${item}`}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-semibold">Коллекция {item}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center text-primary">
            Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Иванова',
                text: 'Невероятно красивые игрушки! Каждая — произведение искусства. Наша ёлка стала настоящим украшением дома.',
                rating: 5
              },
              {
                name: 'Михаил Петров',
                text: 'Заказал набор игрушек в подарок. Качество потрясающее, упаковка праздничная. Все в восторге!',
                rating: 5
              },
              {
                name: 'Елена Смирнова',
                text: 'Восхитительная работа! Игрушки переливаются на свету, создают волшебную атмосферу. Буду заказывать ещё!',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center text-primary">
            Свяжитесь с нами
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответим на все ваши вопросы и поможем подобрать идеальные украшения для вашей ёлки
          </p>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Ваше имя</label>
                  <Input 
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, что вас интересует..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">✨ ЁлкаМагия</h2>
          <p className="mb-6">Создаём новогоднее волшебство с 2020 года</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm opacity-80">© 2024 ЁлкаМагия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
