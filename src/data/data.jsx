import React from 'react';
import GifEmbed from '../components/GifEmbed';
import PhoneFrame from '../components/PhoneFrame';
import FirstSlide from '../components/FirstSlide';

export const slidesData = [
  {
    title: 'App Chosen: Duolingo',
    icon: 'fas fa-mobile-alt',
    content: <FirstSlide />,
  },
  {
    title: 'Evaluation Methods Used',
    icon: 'fas fa-search',
    content: (
      <>
        <article>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">1. Cognitive Walkthrough</h3>
          <p className="mb-2">We selected a basic task: completing a beginner Korean lesson focused on Hangul characters.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Step 1: Selecting the Korean Course</strong> - The user easily selected “Korean” from the list and tapped “Start Lesson.” The interface was intuitive and well-labeled. <span className="text-green-500">✅</span></li>
            <li><strong>Step 2: Learning Korean Characters</strong> - The lesson introduced Korean letters and their sounds. However, the user struggled with pronunciation because there was no clear phonetic guide. <span className="text-yellow-500">⚠️</span></li>
            <li><strong>Step 3: Completing the Lesson</strong> - The user received XP and streak points but was unsure whether the lesson was properly saved or recorded. <span className="text-yellow-500">⚠️</span></li>
          </ul>
        </article>
        <article className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">2. Field Study / Naturalistic Observation</h3>
          <p className="mb-2">One of our group members acted as the evaluator, observing another groupmate (a beginner in Korean) using Duolingo in a natural setting (home environment). The evaluator did not provide assistance, only observed and took notes.</p>
          <h4 className="font-semibold mt-4">Evaluator’s Observations:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>The user was engaged but confused by unfamiliar Hangul symbols.</li>
            <li>They often replayed the audio to understand pronunciation, showing a need for clearer phonetic cues.</li>
            <li>After finishing the lesson, the user asked if their progress was saved, indicating uncertainty.</li>
            <li>The user was frustrated by mistakes that were marked wrong without any explanation or hint.</li>
          </ul>
        </article>
      </>
    ),
  },
  {
    title: 'Usability Issues Found',
    icon: 'fas fa-exclamation-triangle',
    content: (
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-blue-600">
          <h4 className="font-bold">1. Limited Pronunciation Help</h4>
          <p>The app introduces new letters but does not guide users well on how to pronounce them.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-blue-600">
          <h4 className="font-bold">2. Unclear Lesson Completion Feedback</h4>
          <p>No strong confirmation that the user’s progress was saved after finishing a lesson.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-blue-600">
          <h4 className="font-bold">3. Lack of Error Explanation</h4>
          <p>Mistakes are simply marked wrong without teaching the user what the correct answer means or why it’s right.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Suggestions for Improvement',
    icon: 'fas fa-lightbulb',
    content: (
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Add phonetic spellings and clearer pronunciation guidance in Hangul lessons.</li>
        <li>Show a “Lesson Completed” message or checkmark to confirm saved progress.</li>
        <li>Provide brief explanations or hints after a user makes a mistake.</li>
      </ul>
    ),
  },
  {
    title: 'Where Issues Occur',
    icon: 'fas fa-map-marker-alt',
    content: (
      <div className="space-y-4">
        <article>
          <h3 className="font-semibold text-blue-600"><i className="fas fa-microphone-alt mr-2"></i>1. Limited Pronunciation Help</h3>
          <p><strong>Where it occurs:</strong> First few lessons under the “Alphabet” or “Intro” unit and matching exercises.</p>
          <p><strong>What happens:</strong> The app plays audio, but doesn’t always show the romanized text. There's no breakdown of pronunciation rules for compound sounds.</p>
        </article>
        <article>
          <h3 className="font-semibold text-blue-600"><i className="fas fa-check-circle mr-2"></i>2. Unclear Lesson Completion Feedback</h3>
          <p><strong>Where it occurs:</strong> After finishing a lesson, during the XP/Streak/Gems reward screen.</p>
          <p><strong>What happens:</strong> The user sees XP and a level bar, but there’s no strong indication like “Lesson 1 Complete” or “Progress saved.”</p>
        </article>
        <article>
          <h3 className="font-semibold text-blue-600"><i className="fas fa-times-circle mr-2"></i>3. Lack of Explanation for Mistakes</h3>
          <p><strong>Where it occurs:</strong> Translation exercises and grammar-based questions.</p>
          <p><strong>What happens:</strong> Duolingo often just shows the correct answer without explaining the user's error.</p>
        </article>
      </div>
    ),
  },
  {
    title: 'App Screenshots',
    icon: 'fas fa-images',
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["1st.jpg", "2nd.jpg", "3rd.jpg", "4th.jpg"].map((img, index) => (
          <img key={index} src={`/images/${img}`} alt={`Screenshot ${index + 1}`} className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform" />
        ))}
      </div>
    ),
  },
  {
    title: 'Summary Table',
    icon: 'fas fa-table',
    content: (
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-3 bg-blue-700 text-white">Issue</th>
            <th className="p-3 bg-blue-700 text-white">Screen/Area</th>
            <th className="p-3 bg-blue-700 text-white">Problem</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3">Limited Pronunciation Help</td>
            <td className="p-3">Alphabet / Intro Unit lessons</td>
            <td className="p-3">No phonetic (romanized) aid; unclear audio guidance</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">Unclear Lesson Completion</td>
            <td className="p-3">Post-lesson XP reward screen</td>
            <td className-="p-3">No “lesson complete” confirmation</td>
          </tr>
          <tr>
            <td className="p-3">No Explanation for Mistakes</td>
            <td className="p-3">Translation / Grammar questions</td>
            <td className="p-3">Wrong answers not explained</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];
