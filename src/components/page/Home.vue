<template>
  <div>
    <a href="#navbar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="
          bi bi-arrow-up-square-fill
          h-16
          rounded-full
          opacity-30
          fixed
          bottom-10
          right-10
        "
        viewBox="0 0 16 16"
      >
        <path
          d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
        />
      </svg>
    </a>
    <Header />
    <div class="intro" id="aboutMe">
      <div class="flex justify-center items-center p-10 md:flex-wrap-reverse">
        <div class="mr-40 w-4/12 lg:mr-10 lg:w-3/5 md:w-4/5 md:mr-0">
          <p class="leading-relaxed mb-5 font-semibold">
            Here is a short introduction about me:
          </p>
          <p class="text-justify leading-relaxed">
            Hey there, my name is Po.<br />
            Working as a full time mechanical engineer by day in consultancy
            based in Melaka, Malaysia and learning to code during by night.
            Aiming to land a job as front-end web developer in near future.
            <br />
            Here are the programming languages, libraries and framework that I'm
            currently working on:
          </p>
          <div class="flex justify-around mt-2">
            <ul class="list-disc leading-loose uder">
              <li>
                <a
                  class="
                    hover:text-orange hover:underline
                    transition
                    ease-in-out
                    duration-500
                  "
                  href="https://en.wikipedia.org/wiki/HTML"
                  ><abbr title="Hypertext Markup Language">HTML</abbr></a
                >
              </li>
              <li>
                <a
                  class="
                    hover:text-blue-500 hover:underline
                    transition
                    ease-in-out
                    duration-500
                  "
                  href="https://en.wikipedia.org/wiki/CSS"
                  ><abbr title="Cascading Style Sheet">CSS</abbr></a
                >
              </li>
              <li>
                <a
                  class="
                    hover:text-yellow-400 hover:underline
                    transition
                    ease-in-out
                    duration-500
                  "
                  href="https://en.wikipedia.org/wiki/JavaScript"
                  >JavaScript</a
                >
              </li>
            </ul>
            <ul class="list-disc leading-loose">
              <li>
                <a
                  class="
                    hover:text-green-600 hover:underline
                    transition
                    ease-in-out
                    duration-500
                  "
                  href="https://vuejs.org/"
                  >Vue.js</a
                >
              </li>
              <li>
                <a
                  class="
                    hover:text-cyan hover:underline
                    transition
                    ease-in-out
                    duration-500
                  "
                  href="https://tailwindcss.com/"
                  >Tailwindcss</a
                >
              </li>
              <li>
                <a
                  class="
                    hover:text-indigo-700 hover:underline
                    transition
                    ease-in-out
                    duration-500
                  "
                  href="https://getbootstrap.com/"
                  >Bootstrap</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="rounded-full md:mb-10">
          <img
            class="h-80 rounded-3xl"
            src="src\image\profile1.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
    <div
      class="py-20 flex justify-center font-roboto text-xl bg-green-50"
      id="career"
    >
      <div
        class="
          flex flex-col
          justify-center
          p-10
          rounded-xl
          w-4/5
          xl:w-6/12
          2xl:w-4/12
        "
      >
        <div class="mb-10 font-semibold">
          <p>Working Experience:</p>
        </div>
        <div class="flex mb-10 justify-around">
          <button class="careerArrow" @click="num = 0">
            <svg
              class="w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
          <p>...</p>
          <button class="careerArrow" @click="num = 1">
            <svg
              class="w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
          <p>...</p>
          <button disabled class="cursor-not-allowed">
            <svg
              class="w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
          <p>...</p>
          <button disabled class="cursor-not-allowed">
            <svg
              class="w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <p class="mb-2">
            Company Name: <span>{{ career[num].companyName }}</span>
          </p>
          <p class="mb-5">
            Position: <span>{{ career[num].position }}</span>
          </p>
          <p>Job description:</p>
          <ul class="list-disc ml-12 mt-2 leading-relaxed">
            <li v-for="job in career[num].jobDescription" :key="job">{{ job }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center py-20 bg-green-50" id="project">
      <div class="w-8/12">
        <div class="text-xl font-roboto font-semibold mb-10">
          <p>Project Showcase:</p>
        </div>
        <!-- Main Project highlight put here -->
      </div>
    </div>
    <div class="w-full flex justify-center py-20 bg-green-50">
      <div class="w-8/12">
        <div class="text-xl font-roboto font-semibold mb-16">
          <p>Other Projects</p>
        </div>
        <div class="flex justify-around xl:flex-wrap">
          <ProjectCard class="mb-5" />
          <ProjectCard class="mb-5" />
          <ProjectCard class="mb-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "/@/components/organism/ProjectCard.vue";
import Header from "/@/components/organism/Header.vue";

export default {
  name: "Home",
  data() {
    return {
      career: [
        {
          companyName: "Protech Builders Sdn. Bhd.",
          position: "Assistant Engineer Intern",
          jobDescription: [
            "Participate in site visit.",
            "Prepare and study technical drawings, specifications of electrical systems, and topographical maps to ensure that installation and operation compiled to standards and customer requirements.",
            "Prepare specifications of purchase of materials and equipment.",
            "To cooperate with engineering and other departments in the company and provide effective technical support to customer.",
          ],
        },
        {
          companyName: "Durianê Professional Sdn. Bhd.",
          position: "Mechanical Engineer",
          jobDescription: [
            "Cold water and sanitary plumbing design.",
            "Design fire protection system for buildings in accordance to Malaysia Standard (MS), NFPA and FM.",
            "Prepare fully hydraulic calculation simulation for sprinkler system.",
            "Design air conditioning and mechanical ventilation system for buildings.",
            "Prepare tender documents for various mechanical service package.",
            "Evaluate compliance of tenderer submission",
            "Prepare authority submission for repective authorities required for the project",
            "Work with other multidiscipline Engineers and other professional including Architect and Surveyor in projects."
          ],
        },
      ],
      num: 0
    };
  },
  components: {
    ProjectCard,
    Header,
  },
};
</script>

<style scoped></style>
