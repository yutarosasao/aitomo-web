import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle, Mic, Zap, Sparkles, Star, Apple, Smartphone, User, Image as ImageIcon, ChevronDown } from 'lucide-react';

export default function CompleteLandingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-teal-100 via-mint-100 to-emerald-100 font-noto-sans-jp'>
      <header className='bg-emerald-800 text-white py-4 sticky top-0 z-50'>
        <div className='container mx-auto px-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>AIトーク友達</h1>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <a href='#features' className='hover:text-emerald-300'>
                  機能
                </a>
              </li>
              <li>
                <a href='#screenshots' className='hover:text-emerald-300'>
                  スクリーンショット
                </a>
              </li>
              <li>
                <a href='#usage' className='hover:text-emerald-300'>
                  使い方
                </a>
              </li>
              <li>
                <a href='#reviews' className='hover:text-emerald-300'>
                  レビュー
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className='container mx-auto px-4 py-16'>
        <section className='mb-20'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <h2 className='text-4xl md:text-5xl font-bold mb-4 text-emerald-800'>AIがあなたの話し相手に</h2>
              <p className='text-xl text-emerald-600 mb-8'>自然な会話、リアルタイムの応答、そしてあなた専用のAI。新しいコミュニケーションの形を体験しましょう。</p>
              <div className='flex space-x-4'>
                <Button size='lg' className='bg-emerald-500 hover:bg-emerald-600 text-white'>
                  <Apple className='mr-2 h-5 w-5' /> App Store
                </Button>
                <Button size='lg' className='bg-emerald-500 hover:bg-emerald-600 text-white'>
                  <Smartphone className='mr-2 h-5 w-5' /> Google Play
                </Button>
              </div>
            </div>
            <div className='md:w-1/2'>
              <Image src='/avatars/avatar1.png' alt='AIトーク友達キャラクター' width={500} height={500} className='w-full h-auto max-w-md mx-auto rounded-full shadow-2xl border-4 border-white' />
            </div>
          </div>
          <div className='text-center mt-12'>
            <a href='#features' className='text-emerald-600 hover:text-emerald-700 transition-colors'>
              詳細を見る
              <ChevronDown className='inline-block ml-2' />
            </a>
          </div>
        </section>

        <section id='features' className='mb-20'>
          <h2 className='text-3xl font-bold mb-8 text-center text-emerald-800'>主な機能</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { icon: MessageCircle, title: '自然な会話', description: '高度なAIによる自然な対話を実現' },
              { icon: Mic, title: '音声合成', description: 'VOICEVOXエンジンによるリアルな音声' },
              { icon: Zap, title: '即時応答', description: '瞬時の音声・テキスト応答' },
              { icon: User, title: 'カスタマイズ', description: 'あなた専用のAIアシスタント' },
              { icon: Sparkles, title: '多様な話題', description: '雑談から相談まで幅広くサポート' },
              { icon: ImageIcon, title: 'キャラクターアルバム', description: 'ポイントでキャラクター画像をアンロック' },
            ].map((item, index) => (
              <Card key={index} className='overflow-hidden transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <item.icon className='w-12 h-12 mb-4 text-emerald-500' />
                  <h3 className='text-xl font-bold mb-2 text-emerald-700'>{item.title}</h3>
                  <p className='text-emerald-600'>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id='screenshots' className='mb-20'>
          <h2 className='text-3xl font-bold mb-8 text-center text-emerald-800'>アプリのスクリーンショット</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            {[
              {
                src: '/screenshots/screenshot-1.png',
                alt: 'AI会話画面',
                title: '魅力的な会話',
                description: '好奇心をくすぐる話題で、AIとの対話を楽しめます。',
              },
              {
                src: '/screenshots/screenshot-2.png',
                alt: 'アルバム画面',
                title: '報酬システム',
                description: '会話を重ねるごとにポイントを獲得し、素敵なキャラクター画像をアンロックできます。',
              },
              {
                src: '/screenshots/screenshot-3.png',
                alt: 'ユーザープロフィール画面',
                title: 'パーソナライズされた体験',
                description: 'あなたのプロフィールに基づいて、AIがより適切な会話を提供します。',
              },
            ].map((screenshot, index) => (
              <Card key={index} className='overflow-hidden transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <div className='aspect-w-9 aspect-h-16 mb-4 flex justify-center'>
                    <Image src={screenshot.src} alt={screenshot.alt} width={300} height={533} className='object-cover rounded-lg' />
                  </div>
                  <h3 className='text-xl font-bold mb-2 text-emerald-700'>{screenshot.title}</h3>
                  <p className='text-emerald-600'>{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id='usage' className='mb-20'>
          <h2 className='text-3xl font-bold mb-8 text-center text-emerald-800'>使い方</h2>
          <Tabs defaultValue='chat' className='w-full'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='chat'>チャット</TabsTrigger>
              <TabsTrigger value='voice'>音声会話</TabsTrigger>
              <TabsTrigger value='custom'>カスタマイズ</TabsTrigger>
            </TabsList>
            <TabsContent value='chat' className='mt-4'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-4 text-emerald-700'>テキストチャット</h3>
                  <p className='text-emerald-600'>1. アプリを開き、チャットモードを選択</p>
                  <p className='text-emerald-600'>2. メッセージを入力し、送信ボタンをタップ</p>
                  <p className='text-emerald-600'>3. AIからの返信を受け取り、会話を楽しむ</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='voice' className='mt-4'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-4 text-emerald-700'>音声会話</h3>
                  <p className='text-emerald-600'>1. アプリを開き、音声モードを選択</p>
                  <p className='text-emerald-600'>2. マイクボタンを押しながら話す</p>
                  <p className='text-emerald-600'>3. AIの音声応答を聞き、会話を楽しむ</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value='custom' className='mt-4'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-4 text-emerald-700'>AIのカスタマイズ</h3>
                  <p className='text-emerald-600'>1. 設定メニューから「AIカスタマイズ」を選択</p>
                  <p className='text-emerald-600'>2. 性格、知識レベル、話し方などを調整</p>
                  <p className='text-emerald-600'>3. 保存して、カスタマイズされたAIと会話を楽しむ</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section id='reviews' className='mb-20'>
          <h2 className='text-3xl font-bold mb-8 text-center text-emerald-800'>ユーザーの声</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { name: '田中さん', comment: '日々の悩み相談に使っています。心が軽くなります。', rating: 5 },
              { name: '佐藤さん', comment: '英会話の練習に最適！発音も自然で勉強になります。', rating: 4 },
              { name: '鈴木さん', comment: 'アイデア出しに重宝しています。新しい視点が得られます。', rating: 5 },
            ].map((review, index) => (
              <Card key={index} className='overflow-hidden transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm'>
                <CardContent className='p-6'>
                  <p className='text-emerald-600 mb-4'>{review.comment}</p>
                  <div className='flex items-center justify-between'>
                    <span className='font-bold text-emerald-700'>{review.name}</span>
                    <div className='flex'>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='text-center mb-20'>
          <h2 className='text-3xl font-bold mb-6 text-emerald-800'>今すぐ始めよう</h2>
          <p className='text-xl text-emerald-600 mb-8'>AIトーク友達があなたの日常をもっと楽しく、もっと便利にします。</p>
          <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <Button size='lg' className='bg-emerald-500 hover:bg-emerald-600 text-white transform transition-all duration-300 hover:scale-105'>
              <Apple className='mr-2 h-5 w-5' /> App Storeでダウンロード
            </Button>
            <Button size='lg' className='bg-emerald-500 hover:bg-emerald-600 text-white transform transition-all duration-300 hover:scale-105'>
              <Smartphone className='mr-2 h-5 w-5' /> Google Playでダウンロード
            </Button>
          </div>
        </section>
      </main>

      <footer className='bg-emerald-800 text-white py-8'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p>&copy; 2023 AIトーク友達 All rights reserved.</p>
            <nav className='mt-4 md:mt-0'>
              <ul className='flex space-x-4'>
                <li>
                  <a href='#' className='hover:text-emerald-300'>
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-emerald-300'>
                    利用規約
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-emerald-300'>
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
