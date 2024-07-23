import axios from 'axios';
import cheerio from 'cheerio';

// Função para obter a URL da thumbnail
export function getThumbnailUrl(videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

// Função para obter o título via scraping
export async function fetchVideoTitle(videoUrl) {
    try {
        const videoId = new URL(videoUrl).searchParams.get('v');
        const response = await axios.get(`https://www.youtube.com/watch?v=${videoId}`);
        const $ = cheerio.load(response.data);
        const title = $('meta[name="title"]').attr('content');
        return title || 'Unknown';
    } catch (error) {
        console.error('Error fetching video title:', error);
        return 'Unknown';
    }
}
