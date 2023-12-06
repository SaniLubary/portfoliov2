/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useRef } from "react";
import { BBAnchor, Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube009: THREE.SkinnedMesh;
    Cube009_1: THREE.SkinnedMesh;
    pantalla: THREE.SkinnedMesh;
    pantalon002: THREE.SkinnedMesh;
    pelo1001: THREE.Mesh;
    pelo2001: THREE.Mesh;
    pelo3001: THREE.Mesh;
    pelo4001: THREE.Mesh;
    cejas003: THREE.SkinnedMesh;
    ojo_mini007: THREE.SkinnedMesh;
    ojo_mini008: THREE.SkinnedMesh;
    Vert002: THREE.SkinnedMesh;
    Vert: THREE.SkinnedMesh;
    remera002: THREE.SkinnedMesh;
    Bone: THREE.Bone;
    Bone_1: THREE.Bone;
    mixamorigHips_1: THREE.Bone;
  };
  materials: {
    ["Lowpoly_Body.001"]: THREE.MeshStandardMaterial;
    ["Lowpoly_Screen.001"]: THREE.MeshStandardMaterial;
    ["brillo azul.001"]: THREE.MeshStandardMaterial;
    M_pantalon: THREE.MeshStandardMaterial;
    M_pelo: THREE.MeshStandardMaterial;
    ["negro boca y ojos"]: THREE.MeshStandardMaterial;
    ["resalto.001"]: THREE.MeshStandardMaterial;
    M_cuerpo: THREE.MeshStandardMaterial;
    M_remera: THREE.MeshStandardMaterial;
  };
};

type ModelType = JSX.IntrinsicElements["group"] & {
  laptop?: boolean,
  bbanchor?: boolean
}

export default function Model({ ...props }: ModelType) {
  const group = useRef<any>();
  const { nodes, materials } = useGLTF("./santi.glb") as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature003"
          position={[-3.62, -0.13, -1]}
          rotation={[-2.6, 0.33, 2.8]}
          scale={0.63}
          userData={{ name: "Armature.003" }}
        >
          <primitive object={nodes.Bone} />
          {props?.laptop &&
            <>
              <group
                name="Lowpoly_Notebook001"
                userData={{ name: "Lowpoly_Notebook.001" }}
              >
                <skinnedMesh
                  name="Cube009"
                  geometry={nodes.Cube009.geometry}
                  material={materials["Lowpoly_Body.001"]}
                  skeleton={nodes.Cube009.skeleton}
                />
                <skinnedMesh
                  name="Cube009_1"
                  geometry={nodes.Cube009_1.geometry}
                  material={materials["Lowpoly_Screen.001"]}
                  skeleton={nodes.Cube009_1.skeleton}
                />
              </group>
              <skinnedMesh
                name="pantalla"
                geometry={nodes.pantalla.geometry}
                material={materials["brillo azul.001"]}
                skeleton={nodes.pantalla.skeleton}
                userData={{ name: "pantalla" }}
              />
            </>
          }
        </group>
        <group
          name="personaje"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          userData={{ name: "personaje" }}
        >
          <group
            name="mixamorigHips"
            position={[0.86, 12.5, 89.02]}
            rotation={[-2.25, -0.35, -0.27]}
            userData={{ name: "mixamorig:Hips" }}
          >
            <group
              name="mixamorigSpine"
              position={[0, 45.22, -2.48]}
              rotation={[0.06, 0, -0.01]}
              userData={{ name: "mixamorig:Spine" }}
            >
              <group
                name="mixamorigSpine1"
                position={[0, 52.84, 0]}
                rotation={[0.16, 0, 0]}
                userData={{ name: "mixamorig:Spine1" }}
              >
                <group
                  name="mixamorigSpine2"
                  position={[0, 60.39, 0]}
                  userData={{ name: "mixamorig:Spine2" }}
                >
                  <group
                    name="mixamorigNeck"
                    position={[0, 67.94, 0]}
                    rotation={[0.05, 0, 0]}
                    userData={{ name: "mixamorig:Neck" }}
                  >
                    <group
                      name="mixamorigHead"
                      position={[0, 37.24, -4.08]}
                      rotation={[0.14, 0.39, -0.1]}
                      userData={{ name: "mixamorig:Head" }}
                    >
                      <group
                        name="mixamorigHeadTop_End"
                        position={[0, 129.19, -14.14]}
                        userData={{ name: "mixamorig:HeadTop_End" }}
                      />
                    </group>
                  </group>
                  <group
                    name="mixamorigLeftShoulder"
                    position={[23.32, 62.19, -0.34]}
                    rotation={[1.57, -0.24, -1.59]}
                    userData={{ name: "mixamorig:LeftShoulder" }}
                  >
                    <group
                      name="mixamorigLeftArm"
                      position={[0, 48.61, 0]}
                      rotation={[-0.33, -0.83, -0.1]}
                      userData={{ name: "mixamorig:LeftArm" }}
                    >
                      <group
                        name="mixamorigLeftForeArm"
                        position={[0, 99.04, 0]}
                        rotation={[-0.77, 0.19, 0.31]}
                        userData={{ name: "mixamorig:LeftForeArm" }}
                      >
                        <group
                          name="mixamorigLeftHand_1"
                          position={[0, 95.35, 0]}
                          rotation={[-3.05, 1.27, 2.64]}
                          userData={{ name: "mixamorig:LeftHand" }}
                        >
                          <group
                            name="mixamorigLeftHandThumb1_1"
                            position={[-14.24, 33.67, -0.34]}
                            rotation={[-0.48, -1.29, -0.13]}
                            userData={{ name: "mixamorig:LeftHandThumb1" }}
                          >
                            <group
                              name="mixamorigLeftHandThumb2_1"
                              position={[-1.21, 29.23, 0]}
                              rotation={[-1.36, 0.2, -0.03]}
                              userData={{ name: "mixamorig:LeftHandThumb2" }}
                            >
                              <group
                                name="mixamorigLeftHandThumb3_1"
                                position={[-0.97, 22.53, 0]}
                                rotation={[0.04, 0, 0]}
                                userData={{ name: "mixamorig:LeftHandThumb3" }}
                              >
                                <group
                                  name="mixamorigLeftHandThumb4_1"
                                  position={[2.18, 14.11, 0]}
                                  userData={{
                                    name: "mixamorig:LeftHandThumb4",
                                  }}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandIndex1_1"
                            position={[-9.62, 66.81, 0.17]}
                            rotation={[-0.07, -0.03, 0.43]}
                            userData={{ name: "mixamorig:LeftHandIndex1" }}
                          >
                            <group
                              name="mixamorigLeftHandIndex2_1"
                              position={[0.02, 13.57, 0]}
                              rotation={[0.02, 0, 0]}
                              userData={{ name: "mixamorig:LeftHandIndex2" }}
                            >
                              <group
                                name="mixamorigLeftHandIndex3_1"
                                position={[0.01, 13.66, 0]}
                                rotation={[0.1, 0, 0]}
                                userData={{ name: "mixamorig:LeftHandIndex3" }}
                              >
                                <group
                                  name="mixamorigLeftHandIndex4_1"
                                  position={[-0.03, 8.67, 0]}
                                  userData={{
                                    name: "mixamorig:LeftHandIndex4",
                                  }}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandMiddle1_1"
                            position={[-0.01, 52.5, -0.23]}
                            rotation={[0, -0.01, -1.4]}
                            userData={{ name: "mixamorig:LeftHandMiddle1" }}
                          >
                            <group
                              name="mixamorigLeftHandMiddle2_1"
                              position={[0.03, 19.02, 0]}
                              rotation={[-2.45, -0.08, 0.07]}
                              userData={{ name: "mixamorig:LeftHandMiddle2" }}
                            >
                              <group
                                name="mixamorigLeftHandMiddle3_1"
                                position={[0.14, 25.05, -2.47]}
                                rotation={[-0.22, 0, 0]}
                                userData={{ name: "mixamorig:LeftHandMiddle3" }}
                              >
                                <group
                                  name="mixamorigLeftHandMiddle4_1"
                                  position={[-0.04, 9.55, 0]}
                                  userData={{
                                    name: "mixamorig:LeftHandMiddle4",
                                  }}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigLeftHandRing1_1"
                            position={[9.64, 68.26, 0.05]}
                            rotation={[0.03, 0, 0]}
                            userData={{ name: "mixamorig:LeftHandRing1" }}
                          >
                            <group
                              name="mixamorigLeftHandRing2_1"
                              position={[-0.06, 17.51, -0.03]}
                              userData={{ name: "mixamorig:LeftHandRing2" }}
                            >
                              <group
                                name="mixamorigLeftHandRing3_1"
                                position={[0, 13.43, 0]}
                                rotation={[-0.03, 0, 0]}
                                userData={{ name: "mixamorig:LeftHandRing3" }}
                              >
                                <group
                                  name="mixamorigLeftHandRing4_1"
                                  position={[0.01, 9.4, 0]}
                                  userData={{ name: "mixamorig:LeftHandRing4" }}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="mixamorigRightShoulder"
                    position={[-23.32, 62.18, -0.29]}
                    rotation={[1.57, 0.24, 1.58]}
                    userData={{ name: "mixamorig:RightShoulder" }}
                  >
                    <group
                      name="mixamorigRightArm"
                      position={[0, 48.61, 0]}
                      rotation={[0.44, -0.37, 0.04]}
                      userData={{ name: "mixamorig:RightArm" }}
                    >
                      <group
                        name="mixamorigRightForeArm"
                        position={[0, 99.04, 0]}
                        rotation={[-0.23, -0.1, -0.23]}
                        userData={{ name: "mixamorig:RightForeArm" }}
                      >
                        <group
                          name="mixamorigRightHand_1"
                          position={[0, 95.35, 0]}
                          rotation={[3.09, -1.51, -3.04]}
                          userData={{ name: "mixamorig:RightHand" }}
                        >
                          <group
                            name="mixamorigRightHandThumb1_1"
                            position={[13.48, 34.5, 0.08]}
                            rotation={[0, 0, -0.35]}
                            userData={{ name: "mixamorig:RightHandThumb1" }}
                          >
                            <group
                              name="mixamorigRightHandThumb2_1"
                              position={[0.77, 29.62, 0]}
                              rotation={[-0.02, 0, 0]}
                              userData={{ name: "mixamorig:RightHandThumb2" }}
                            >
                              <group
                                name="mixamorigRightHandThumb3_1"
                                position={[1.3, 22.39, 0]}
                                rotation={[0.14, 0, 0]}
                                userData={{ name: "mixamorig:RightHandThumb3" }}
                              >
                                <group
                                  name="mixamorigRightHandThumb4_1"
                                  position={[-2.07, 15.07, 0]}
                                  userData={{
                                    name: "mixamorig:RightHandThumb4",
                                  }}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandIndex1_1"
                            position={[8.26, 67.26, 0.28]}
                            rotation={[-0.05, 0.01, -0.19]}
                            userData={{ name: "mixamorig:RightHandIndex1" }}
                          >
                            <group
                              name="mixamorigRightHandIndex2_1"
                              position={[0.01, 14.45, 0]}
                              rotation={[0.05, 0, 0]}
                              userData={{ name: "mixamorig:RightHandIndex2" }}
                            >
                              <group
                                name="mixamorigRightHandIndex3_1"
                                position={[0, 13.72, 0]}
                                rotation={[0.11, 0, 0]}
                                userData={{ name: "mixamorig:RightHandIndex3" }}
                              >
                                <group
                                  name="mixamorigRightHandIndex4_1"
                                  position={[-0.01, 9.33, 0]}
                                  userData={{
                                    name: "mixamorig:RightHandIndex4",
                                  }}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandMiddle1_1"
                            position={[2.24, 56.42, 0.22]}
                            rotation={[0, 0, 1.46]}
                            userData={{ name: "mixamorig:RightHandMiddle1" }}
                          >
                            <group
                              name="mixamorigRightHandMiddle2_1"
                              position={[0, 19.36, 0]}
                              rotation={[-0.02, 0, 0]}
                              userData={{ name: "mixamorig:RightHandMiddle2" }}
                            >
                              <group
                                name="mixamorigRightHandMiddle3_1"
                                position={[0, 20.73, 0]}
                                rotation={[0.02, 0, 0]}
                                userData={{
                                  name: "mixamorig:RightHandMiddle3",
                                }}
                              >
                                <group
                                  name="mixamorigRightHandMiddle4_1"
                                  position={[0, 6.96, 0]}
                                  userData={{
                                    name: "mixamorig:RightHandMiddle4",
                                  }}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="mixamorigRightHandRing1_1"
                            position={[-10.49, 70.16, 0.12]}
                            rotation={[-0.04, 0, -0.13]}
                            userData={{ name: "mixamorig:RightHandRing1" }}
                          >
                            <group
                              name="mixamorigRightHandRing2_1"
                              position={[0, 14.48, 0]}
                              rotation={[0.04, 0, 0]}
                              userData={{ name: "mixamorig:RightHandRing2" }}
                            >
                              <group
                                name="mixamorigRightHandRing3_1"
                                position={[0, 13.26, 0]}
                                rotation={[0.11, 0, 0]}
                                userData={{ name: "mixamorig:RightHandRing3" }}
                              >
                                <group
                                  name="mixamorigRightHandRing4_1"
                                  position={[0, 8.88, 0]}
                                  userData={{
                                    name: "mixamorig:RightHandRing4",
                                  }}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group
              name="mixamorigLeftUpLeg"
              position={[41.2, -25.13, -0.64]}
              rotation={[-0.95, -0.38, -2.76]}
              userData={{ name: "mixamorig:LeftUpLeg" }}
            >
              <group
                name="mixamorigLeftLeg"
                position={[0, 191.12, 0]}
                rotation={[-0.43, 0.04, -0.24]}
                userData={{ name: "mixamorig:LeftLeg" }}
              >
                <group
                  name="mixamorigLeftFoot"
                  position={[0, 157.76, 0]}
                  rotation={[0.79, -0.06, 0.06]}
                  userData={{ name: "mixamorig:LeftFoot" }}
                >
                  <group
                    name="mixamorigLeftToeBase"
                    position={[0, 68.57, 0]}
                    rotation={[0.72, -0.03, 0.02]}
                    userData={{ name: "mixamorig:LeftToeBase" }}
                  >
                    <group
                      name="mixamorigLeftToe_End"
                      position={[0, 23.81, 0]}
                      userData={{ name: "mixamorig:LeftToe_End" }}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group
              name="mixamorigRightUpLeg"
              position={[-41.2, -25.13, -0.89]}
              rotation={[-0.74, 0.11, -3.14]}
              userData={{ name: "mixamorig:RightUpLeg" }}
            >
              <group
                name="mixamorigRightLeg"
                position={[0, 191.12, 0]}
                rotation={[-0.58, 0.05, -0.04]}
                userData={{ name: "mixamorig:RightLeg" }}
              >
                <group
                  name="mixamorigRightFoot"
                  position={[0, 157.79, 0]}
                  rotation={[0.48, 0.25, 0]}
                  userData={{ name: "mixamorig:RightFoot" }}
                >
                  <group
                    name="mixamorigRightToeBase"
                    position={[0, 67.99, 0]}
                    rotation={[0.73, 0.02, -0.02]}
                    userData={{ name: "mixamorig:RightToeBase" }}
                  >
                    <group
                      name="mixamorigRightToe_End"
                      position={[0, 24.11, 0]}
                      userData={{ name: "mixamorig:RightToe_End" }}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
          <skinnedMesh
            name="pantalon002"
            geometry={nodes.pantalon002.geometry}
            material={materials.M_pantalon}
            skeleton={nodes.pantalon002.skeleton}
            morphTargetDictionary={nodes.pantalon002.morphTargetDictionary}
            morphTargetInfluences={nodes.pantalon002.morphTargetInfluences}
            userData={{ targetNames: ["Key 1", "Key 2"], name: "pantalon.002" }}
          />
        </group>
        <group name="Armature001" userData={{ name: "Armature.001" }}>
          <primitive object={nodes.Bone_1} />
          <skinnedMesh
            name="cejas003"
            geometry={nodes.cejas003.geometry}
            material={materials["negro boca y ojos"]}
            skeleton={nodes.cejas003.skeleton}
            userData={{ name: "cejas.003" }}
          />
          <skinnedMesh
            name="ojo_mini007"
            geometry={nodes.ojo_mini007.geometry}
            material={materials["negro boca y ojos"]}
            skeleton={nodes.ojo_mini007.skeleton}
            userData={{ name: "ojo mini.007" }}
          />
          <skinnedMesh
            name="ojo_mini008"
            geometry={nodes.ojo_mini008.geometry}
            material={materials["resalto.001"]}
            skeleton={nodes.ojo_mini008.skeleton}
            userData={{ name: "ojo mini.008" }}
          />
          <skinnedMesh
            name="Vert002"
            geometry={nodes.Vert002.geometry}
            material={materials["negro boca y ojos"]}
            skeleton={nodes.Vert002.skeleton}
            userData={{ name: "Vert.002" }}
          />
          <skinnedMesh
            name="Vert"
            geometry={nodes.Vert.geometry}
            material={materials.M_cuerpo}
            skeleton={nodes.Vert.skeleton}
            morphTargetDictionary={nodes.Vert.morphTargetDictionary}
            morphTargetInfluences={nodes.Vert.morphTargetInfluences}
            userData={{ targetNames: ["Key 1"], name: "Vert" }}
          />
        </group>
        <group
          name="personaje001"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
          userData={{ name: "personaje.001" }}
        >
          <primitive object={nodes.mixamorigHips_1} />
        </group>
        <skinnedMesh
          name="remera002"
          geometry={nodes.remera002.geometry}
          material={materials.M_remera}
          skeleton={nodes.remera002.skeleton}
          morphTargetDictionary={nodes.remera002.morphTargetDictionary}
          morphTargetInfluences={nodes.remera002.morphTargetInfluences}
          userData={{ targetNames: ["Key 1"], name: "remera.002" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./santi.glb");