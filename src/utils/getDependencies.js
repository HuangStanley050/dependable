const getDependencies = (storyIds, stories) => {
  return storyIds.flatMap((storyId) => {
    const story = stories.find((story) => story.key === storyId);
    return [story, ...getDependencies(story.dependencies, stories)];
  });
};

export default getDependencies;
