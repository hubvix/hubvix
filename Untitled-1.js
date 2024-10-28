
        // Formatear números
        function formatNumber(num) {
            return num >= 1000000 ? `${(num / 1000000).toFixed(1)}M` : 
                   num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num;
        }

        // Toggle del botón de seguir
        const followBtn = document.getElementById('followBtn');
        let isFollowing = false;

        followBtn.addEventListener('click', () => {
            isFollowing = !isFollowing;
            followBtn.textContent = isFollowing ? '✓' : '+';
            followBtn.style.backgroundColor = isFollowing ? '#666' : '#ff3b5c';
        });

        // Simular la carga de video
        document.addEventListener('DOMContentLoaded', () => {
            const videoData = {
                id: '1',
                username: 'alfredolarin',
                description: 'COMO HACER LADRILLOS',
                videoUrl: '/api/placeholder/340/600',
                likes: 1400000,
                comments: 11600,
                shares: 19400,
                sound: 'sonido original - AlfredoLarin'
            };
        });
