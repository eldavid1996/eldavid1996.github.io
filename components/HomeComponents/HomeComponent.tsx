import { useLanguageContext } from "@/app/context/LanguageContext";
import { useNavigationContext } from "@/app/context/NavigationContext";
import { ToggleLanguageTransition } from "@/components/Shared/ToggleLanguageTransition";
import { Image as AsideImage } from "./Image";
import { Card as SectionCard } from "./Card";

export function HomeComponent() {
  const { onPageNavigate } = useNavigationContext();
  const { translation } = useLanguageContext();

  const {
    "home.headerTitle": headerTitle,
    "home.headerSubtitles": headerSubtitles,
    "home.content": content,
    "home.textLink1": textLink1,
    "home.textLink2": textLink2,
    "home.altImage": altImage,
  } = translation;

  return (
    <article
      className={`relative flex h-screen items-center justify-center xl:justify-end`}
    >
      {/* Image Aside */}
      <AsideImage altImage={altImage} />
      <section>
        {/* Little Animation when language changes */}
        <ToggleLanguageTransition>
          {/* Card Section */}
          <SectionCard
            onPageNavigate={onPageNavigate}
            headerTitle={headerTitle}
            headerSubtitles={headerSubtitles}
            content={content}
            textLink1={textLink1}
            textLink2={textLink2}
          />
        </ToggleLanguageTransition>
      </section>
    </article>
  );
}
