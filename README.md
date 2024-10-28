<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feed de Videos</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/lucide.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .app-container {
            display: flex;
            height: 100vh;
            background-color: rgb(17, 24, 39);
            color: white;
        }

        /* Sidebar Styles */
        .sidebar {
            width: 64px;
            background-color: black;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .logo {
            margin-bottom: 2rem;
        }

        .sidebar-button {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.5rem;
        }

        .sidebar-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        /* Main Content Styles */
        .main-content {
            flex: 1;
            position: relative;
        }

        .video-container {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .video-player {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .video-info {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 1rem;
            width: 100%;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        }

        .username {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .description {
            margin-bottom: 0.5rem;
        }

        .sound {
            font-size: 0.875rem;
            opacity: 0.8;
        }

        /* Action Buttons */
        .action-buttons {
            position: absolute;
            right: 1rem;
            bottom: 5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            background-color: #444;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .follow-button {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: none;
            background-color: #ff3b5c;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
        }

        .action-button {
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
        }

        .action-count {
            font-size: 0.875rem;
        }

        @media (min-width: 640px) {
            .sidebar {
                width: 256px;
            }

            .sidebar-button {
                justify-content: flex-start;
                padding-left: 1rem;
            }

            .button-text {
                display: inline;
                margin-left: 0.5rem;
            }
        }
    </style>
</head>
<body>
    <div class="app-container">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="logo">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.76 32.77c.07 4.28 1.43 7.54 5.26 9.32 2.91 1.35 6.38.61 9.34-.25l.72-.21c6.79-1.95 13.45-4.75 19.76-8.22 1.94-1.06 3.11-3.15 3.11-5.38V6.87a2.62 2.62 0 0 0-3.86-2.3c-5.33 2.94-11.07 4.71-17.06 5.23a2.62 2.62 0 0 0-2.42 2.61v9.89c-2.97-.11-5.94.49-8.66 1.78-2.94 1.39-4.36 3.99-5.19 7.11v1.58z"/>
                </svg>
            </div>
            <button class="sidebar-button">
                <i class="lucide-home"></i>
                <span class="button-text">Para ti</span>
            </button>
            <button class="sidebar-button">
                <i class="lucide-compass"></i>
                <span class="button-text">Explorar</span>
            </button>
            <button class="sidebar-button">
                <i class="lucide-user"></i>
                <span class="button-text">Siguiendo</span>
            </button>
            <button class="sidebar-button">
                <i class="lucide-video"></i>
                <span class="button-text">LIVE</span>
            </button>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <div class="video-container">
                <img src="/api/placeholder/340/600" class="video-player" alt="Video placeholder">
                <div class="video-info">
                    <div class="username">@alfredolarin</div>
                    <div class="description">COMO HACER LADRILLOS</div>
                    <div class="sound">sonido original - AlfredoLarin</div>
                </div>
                <div class="action-buttons">
                    <div class="avatar">
                        <img src="/api/placeholder/48/48" alt="alfredolarin">
                    </div>
                    <button class="follow-button" id="followBtn">+</button>
                    <button class="action-button">
                        <i class="lucide-heart"></i>
                        <span class="action-count">1.4M</span>
                    </button>
                    <button class="action-button">
                        <i class="lucide-message-circle"></i>
                        <span class="action-count">11.6K</span>
                    </button>
                    <button class="action-button">
                        <i class="lucide-bookmark"></i>
                    </button>
                    <button class="action-button">
                        <i class="lucide-share-2"></i>
                        <span class="action-count">19.4K</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script>
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
    </script>
</body>
</html>
