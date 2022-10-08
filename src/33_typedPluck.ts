interface Album {
  artist: string;
  title: string;
  releaseDate: string;
  recordingType: RecordingType;
}

type RecordingType = 'studio' | 'live';

/**
 * keyof Album 테스트
 * "artist" | "title" | "releaseDate" | "recordingType"
 */
type K = keyof Album;

function pluck<T, K extends keyof T>(records: T[], key: K): T[K][] {
  return records.map(r => r[key]);
}

const albums: Album[] = [
  {
    artist: '',
    title: '',
    releaseDate: 'YYYY-MM-DD',
    recordingType: 'studio',
  },
];

const recordingTypes = pluck(albums, 'recordingType');
