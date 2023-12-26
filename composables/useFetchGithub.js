export default function useGitHubRepos() {
  const githubRepos = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchGitHubRepos = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('https://api.github.com/users/kayzou/repos');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      githubRepos.value = await response.json();
    } catch (e) {
      error.value = 'Error fetching data';
    } finally {
      loading.value = false;
    }
  };

  return {
    githubRepos,
    loading,
    error,
    fetchGitHubRepos,
  };
}
