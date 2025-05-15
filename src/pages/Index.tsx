
import { ThumbsUp, ThumbsDown, Calendar, Star, ArrowUp, School, Users, BookOpen, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyStats from "@/components/KeyStats";
import ResearchSection from "@/components/ResearchSection";
import FindingCard from "@/components/FindingCard";
import StudyHighlight from "@/components/StudyHighlight";
import RecommendationCard from "@/components/RecommendationCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <KeyStats />
      
      {/* Introduction Section */}
      <ResearchSection
        id="introduction"
        title="Introduction"
        description="Social media has revolutionized how adolescents communicate, form identity, and build relationships. With 95% of American teens using social media daily and spending 3-4 hours on these platforms, understanding its impact on mental health is crucial."
        bgColor="bg-white"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FindingCard
            title="Widespread Usage"
            description="Social media platforms like Instagram, Snapchat, TikTok, and X are ubiquitous among teens. The COVID-19 pandemic accelerated this digital reliance, raising questions about its effect on mental well-being."
            icon={<Users className="h-6 w-6" />}
          />
          
          <FindingCard
            title="Two-Sided Effect"
            description="Social media enables connection and self-expression but can also lead to psychological distress through overuse, exposure to idealized representations, and cyberbullying."
            icon={<Star className="h-6 w-6" />}
          />
          
          <FindingCard
            title="Research Scope"
            description="This systematic review integrates evidence from 35 peer-reviewed articles (2013-2024) examining how social media affects outcomes like anxiety, depression, self-esteem, body image, and sleep quality."
            icon={<BookOpen className="h-6 w-6" />}
          />
        </div>
      </ResearchSection>
      
      {/* Positive Effects Section */}
      <ResearchSection
        id="positive-effects"
        title="Positive Effects of Social Media Use"
        description="When used mindfully, social media can provide valuable opportunities for social connection, emotional support, and mental health awareness."
        bgColor="bg-gray-50"
      >
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FindingCard
              title="Social Connection"
              description="Platforms like Snapchat and Instagram enable collaboration and communication, providing teenagers with feelings of belonging and social connectedness."
              icon={<Users className="h-6 w-6" />}
            />
            
            <FindingCard
              title="Emotional Support"
              description="Supportive peer interactions on social media can promote resilience, with positive comments improving coping ability during adversity."
              icon={<MessageCircle className="h-6 w-6" />}
            />
          </div>
          
          <h3 className="text-xl font-medium text-theme-500 mt-12 mb-4">Key Research Findings</h3>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <StudyHighlight
              authors="Smith et al."
              year="2022"
              title="Social Connectivity Through Digital Platforms"
              finding="Snapchat and Instagram increase social connectedness by enabling collaboration and providing teenagers with feelings of belonging."
              platform="Instagram, Snapchat"
            />
            
            <StudyHighlight
              authors="Turuba et al."
              year="2024"
              title="Mental Health Information on TikTok"
              finding="Qualitative interviews with Canadian youth established that TikTok serves as a source of mental health information, where users discover and share content about depression and anxiety."
              platform="TikTok"
            />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <StudyHighlight
              authors="McCashin & Murphy"
              year="2023"
              title="TikTok's Contribution to Public Health"
              finding="Short video informatics on TikTok create awareness and peer support, contributing positively to public health communications."
              platform="TikTok"
            />
            
            <StudyHighlight
              authors="Miller & Young"
              year="2021"
              title="Peer Support and Resilience"
              finding="Peer commenting on social media promotes resilience, with supportive comments improving coping ability in adversity."
              statistic="r = 0.25, p < 0.05"
            />
          </div>
        </div>
      </ResearchSection>
      
      {/* Negative Effects Section */}
      <ResearchSection
        id="negative-effects"
        title="Negative Effects of Social Media Use"
        description="Despite its benefits, social media poses significant risks to adolescent mental health, especially when used excessively or in maladaptive ways."
        bgColor="bg-white"
      >
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <FindingCard
              title="Depression & Anxiety"
              description="Systematic reviews consistently associate excessive social media use with increased anxiety, depression, and lowered self-esteem."
              icon={<ThumbsDown className="h-6 w-6" />}
            />
            
            <FindingCard
              title="Social Comparison"
              description="Exposure to idealized lifestyles and bodies on platforms like Instagram heightens body image dissatisfaction, strongly correlating with depressive symptoms."
              icon={<ThumbsDown className="h-6 w-6" />}
            />
            
            <FindingCard
              title="Sleep Disruption"
              description="Short-form video sites like TikTok can disrupt sleep patterns, especially when used at night, mediating depression through lowered sleep quality."
              icon={<ThumbsDown className="h-6 w-6" />}
            />
          </div>
          
          <h3 className="text-xl font-medium text-theme-500 mt-12 mb-4">Key Research Findings</h3>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <StudyHighlight
              authors="Ivie et al."
              year="2020"
              title="Meta-Analysis on Depression"
              finding="Significant association between social media use and depressive symptoms among adolescents."
              statistic="d = 0.24, p < 0.01"
            />
            
            <StudyHighlight
              authors="Williams & Guerra"
              year="2022"
              title="Cyberbullying Effects"
              finding="Cyberbullying on platforms like TikTok and YouTube significantly increases depression risk among adolescents."
              platform="TikTok, YouTube"
              statistic="OR = 2.1, p < 0.05"
            />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <StudyHighlight
              authors="Zhu et al."
              year="2024"
              title="Video Watching and Sleep"
              finding="Nighttime use of short-form videos disrupts sleep, mediating depression through lowered sleep quality among young people in China."
              platform="TikTok"
              statistic="path coeff. = 0.19, p < 0.01"
            />
            
            <StudyHighlight
              authors="Thompson & Heinberg"
              year="2022"
              title="Body Image Effects"
              finding="Exposure to idealized images on Instagram and TikTok is linked to body dissatisfaction among adolescents."
              platform="Instagram, TikTok"
              statistic="r = 0.29, p < 0.01"
            />
          </div>
        </div>
      </ResearchSection>
      
      {/* Moderating Factors */}
      <ResearchSection
        id="moderating-factors"
        title="Contextual Influences & Moderating Factors"
        description="The impact of social media on psychological health depends on various contextual factors and individual differences."
        bgColor="bg-gray-50"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-theme-500 mb-4">Gender Differences</h3>
            <p className="text-gray-700 mb-4">
              Research shows that girls may be more vulnerable to negative mental health outcomes from social media use, particularly on appearance-oriented platforms like Instagram.
            </p>
            <div className="mt-4">
              <StudyHighlight
                authors="Twenge et al."
                year="2022"
                title="Gender as a Moderator"
                finding="Stronger negative effects of social media use on mental health were found in girls compared to boys."
                statistic="r = 0.38 vs. 0.15 for boys, p < 0.001"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-theme-500 mb-4">Usage Patterns</h3>
            <p className="text-gray-700 mb-4">
              How teens use social media matters: passive scrolling tends to worsen mental health outcomes, while active engagement may have more positive effects.
            </p>
            <div className="mt-4">
              <StudyHighlight
                authors="Coyne et al."
                year="2020"
                title="Active vs. Passive Use"
                finding="Active social media use improves well-being, while passive use worsens mental health outcomes."
                statistic="β = -0.18, p < 0.05"
              />
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-theme-500 mb-4">Personality Factors</h3>
            <p className="text-gray-700 mb-4">
              Individual personality traits can influence how social media affects mental health. Neurotic adolescents may experience greater distress from social comparison, while resilience can buffer against adverse effects.
            </p>
            <div className="mt-4">
              <StudyHighlight
                authors="Miller & Young"
                year="2021"
                title="Resilience as Buffer"
                finding="Higher resilience scores were associated with reduced negative mental health impacts from social media use."
                statistic="r = 0.25, p < 0.05"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-theme-500 mb-4">Content Type</h3>
            <p className="text-gray-700 mb-4">
              The nature of content viewed or engaged with on social media significantly impacts mental health outcomes. Positive content tends to improve mood, while negative or toxic interactions can increase feelings of loneliness.
            </p>
            <div className="mt-4">
              <StudyHighlight
                authors="Johnson et al."
                year="2021"
                title="Content Impact on Mood"
                finding="Positive content on social media platforms improves mood and can reduce depressive symptoms."
                statistic="r = 0.20, p < 0.05"
              />
            </div>
          </div>
        </div>
      </ResearchSection>
      
      {/* Recommendations Section */}
      <ResearchSection
        id="recommendations"
        title="Key Recommendations"
        description="Based on the systematic review findings, these evidence-based recommendations can help promote healthier social media use among adolescents."
        bgColor="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <RecommendationCard
            index={0}
            title="Balanced Usage"
            description="Encourage time limits (e.g., <2 hours daily) and screen-free periods, especially before bedtime to protect sleep quality."
            icon={<Calendar className="h-5 w-5" />}
          />
          
          <RecommendationCard
            index={1}
            title="Content Regulation"
            description="Implement content filtering, promote critical media literacy, and report harmful or misleading content on platforms."
            icon={<ThumbsUp className="h-5 w-5" />}
          />
          
          <RecommendationCard
            index={2}
            title="Personality-Aware Strategies"
            description="Tailor approaches based on individual differences, with extra support for those more vulnerable to social comparison or anxiety."
            icon={<Users className="h-5 w-5" />}
          />
          
          <RecommendationCard
            index={3}
            title="Digital Support Resources"
            description="Create and promote online support communities and resources focused on mental health awareness and education."
            icon={<School className="h-5 w-5" />}
          />
        </div>
        
        <div className="mt-12 bg-theme-100 rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-medium text-theme-500 mb-4">For Stakeholders</h3>
          <p className="text-gray-700 mb-6">
            Parents, educators, mental health professionals, and policymakers all play crucial roles in creating healthier online environments for adolescents.
          </p>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded p-5">
              <h4 className="font-medium text-theme-500 mb-2">For Parents</h4>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Monitor screen time and enforce balanced usage</li>
                <li>• Open communication about online experiences</li>
                <li>• Model healthy digital habits</li>
                <li>• Create tech-free zones and times at home</li>
              </ul>
            </div>
            
            <div className="bg-white rounded p-5">
              <h4 className="font-medium text-theme-500 mb-2">For Educators</h4>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Implement digital literacy programs</li>
                <li>• Teach critical media evaluation skills</li>
                <li>• Recognize warning signs of social media distress</li>
                <li>• Create supportive classroom environments</li>
              </ul>
            </div>
            
            <div className="bg-white rounded p-5">
              <h4 className="font-medium text-theme-500 mb-2">For Mental Health Professionals</h4>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• Screen for problematic social media use</li>
                <li>• Develop targeted interventions</li>
                <li>• Create resources for parents and educators</li>
                <li>• Advocate for platform-level safeguards</li>
              </ul>
            </div>
          </div>
        </div>
      </ResearchSection>
      
      <Footer />
      
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-theme-400 hover:bg-theme-500 text-white rounded-full p-3 shadow-lg"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
