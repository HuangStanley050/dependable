const canBeIncluded = (story, stories, sourceProjectKey) => {
    if (story.project.key === sourceProjectKey) {
      return (
        story.estimatedDurationDays &&
        story.dependencies.every((storyId) =>
          canBeIncluded(
            stories.find((story) => story.key === storyId),
            stories,
            sourceProjectKey
          )
        )
      );
    }
    return story.sprint?.startDate && story.sprint?.endDate;
  };

export default canBeIncluded;
