export const git = {
  title: "Git & GitHub",
  subtitle: "Version control for professionals.",
  questions: [
    {
      id: "git-1",
      question: "Git Merge vs Git Rebase?",
      answer: "Merge combines two branches and creates a new 'merge commit', preserving exact history but creating a messy graph. Rebase moves your entire branch to the tip of the master branch, rewriting history to be perfectly linear.",
      story: { title: "The Co-Authors", text: "Merge: You staple your chapter and your friend's chapter together with a cover page saying 'Combined!'. Rebase: You secretly rewrite your chapter so it flows perfectly after your friend's, making it look like one person wrote it." },
      code: `// Merging\ngit merge feature-branch\n// Rebasing\ngit rebase main`
    },
    {
      id: "git-2",
      question: "What is a Pull Request (PR)?",
      answer: "A PR is a request to merge your code changes into the main repository. It triggers a review process where teammates can inspect the code, leave comments, and approve it before it affects production.",
      story: { title: "The Editor's Desk", text: "You don't just print your book and sell it. You put it on the Editor's Desk (Pull Request). The editor leaves red ink notes (Code Review). You fix them, and only then is it published (Merged)." },
      code: `# Creating a new branch for your PR\ngit checkout -b feature/login-page\ngit push origin feature/login-page\n# Now go to GitHub to open the PR`
    },
    {
      id: "git-3",
      question: "How do you resolve a Merge Conflict?",
      answer: "A conflict happens when Git can't automatically merge changes (e.g., two people edited the exact same line). You resolve it by opening the file, manually choosing which code to keep (or combining them), saving, and making a new commit.",
      story: { title: "The Argument", text: "Git is a peacekeeper. When two people claim they wrote line 42, Git throws its hands up and says 'You two figure it out!' It marks the file, and you have to manually delete the other person's code (or yours) and tell Git 'We agreed'." },
      code: `// Git injects conflict markers into your code:\n<<<<<<< HEAD\nconst color = 'red';\n=======\nconst color = 'blue';\n>>>>>>> feature-branch`
    }
  ]
};
