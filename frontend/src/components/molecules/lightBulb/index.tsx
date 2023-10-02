import * as S from './index.styled';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export default function LightBulb() {
  // gltf 파일 만들어서 넣어야함
  // const computer = useGLTF('./objs/scene.gltf');
  return (
    <>
      {/* <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
        <pointLight intensity={1} />
        <primitive object={computer.scene} scale={0.5} position={[0, 0, -1.5]} rotation={[0, 0, 0]} />
      </mesh> */}
    </>
  );
}
