# Changelog

## [0.62.0](https://github.com/suyambuganesh82/devops-stack/compare/v0.61.0...v0.62.0) (2022-12-16)


### ⚠ BREAKING CHANGES

* **eks:** send http traffic on NLB to port 80 on cluster ([#810](https://github.com/suyambuganesh82/devops-stack/issues/810))
* **argocd:** upgrade ArgoCD charts and use new repositories spec ([#741](https://github.com/suyambuganesh82/devops-stack/issues/741))

### Features

* **aad_pod_identity:** update chart ([996a03a](https://github.com/suyambuganesh82/devops-stack/commit/996a03a6e0215ab952bdc10cf69b9d4a4b052835))
* **aad-pod-identity:** create identities Namespaces ([0358f2d](https://github.com/suyambuganesh82/devops-stack/commit/0358f2d5ad55e42892d41a053150b99f8a088375))
* activate traefik dashboard with oidc support ([ed291d7](https://github.com/suyambuganesh82/devops-stack/commit/ed291d7eb3ce432ee580910ba08702cd5fc1760a))
* add codeowners, contributing and security instructions ([dee2d3b](https://github.com/suyambuganesh82/devops-stack/commit/dee2d3b4945e587e68d94561afb6d8c5f9f68566))
* add conventional commits check ([63c7f39](https://github.com/suyambuganesh82/devops-stack/commit/63c7f398e1d9463685b094a19a2950b5480bdaec))
* add extra_volume_mount variable for prometheus oauth sidecar ([#889](https://github.com/suyambuganesh82/devops-stack/issues/889)) ([6342db9](https://github.com/suyambuganesh82/devops-stack/commit/6342db9493a0f0474854aaf8e7732524b20b58e3))
* add http01 solver for acme for AKS and EKS ([ff3188c](https://github.com/suyambuganesh82/devops-stack/commit/ff3188c567db0061a4a12412241e49addef3b28a))
* Add initial support for OpenTelekomCloud's CCE ([a7e374b](https://github.com/suyambuganesh82/devops-stack/commit/a7e374bdae98da58548902f2ef80c49b104e0394))
* add Release Please Action ([aa781ec](https://github.com/suyambuganesh82/devops-stack/commit/aa781ecf3b2d8e25fdcca465a1bd9af4165998c4))
* add support for tfmigrate in gitlab ci pipeline ([1654a78](https://github.com/suyambuganesh82/devops-stack/commit/1654a784b9abad7c77c3de88695a10c99a25718a))
* add support to deploy ApplicationSets ([ea3a930](https://github.com/suyambuganesh82/devops-stack/commit/ea3a930adb56b0741f0ed4d2d1e94051821cd3fa))
* **aks:** add agents_pool_name, agents_label and sku_tier params to module interface ([#846](https://github.com/suyambuganesh82/devops-stack/issues/846)) ([964ed0b](https://github.com/suyambuganesh82/devops-stack/commit/964ed0bf8a7f3f137d9f0cd7a8bed8c1c153a596))
* **aks:** add kube_admin_config output ([b0fa82d](https://github.com/suyambuganesh82/devops-stack/commit/b0fa82da16f7c7edbd244b9dcb2b5fa5e7b28df7))
* **aks:** add kubelet identity to outputs ([f883650](https://github.com/suyambuganesh82/devops-stack/commit/f883650310fbd6e6828af4531d9ddf1855599653))
* **aks:** add support for node pools in AKS ([edb9813](https://github.com/suyambuganesh82/devops-stack/commit/edb981339ef566e21ae16338bc7e6c17699da9d9))
* **aks:** create UAI and corresponding AzureIdentities and AzureIdentityBindings ([6f19e1f](https://github.com/suyambuganesh82/devops-stack/commit/6f19e1fd86907ae696a3621650ff14adddb3f196))
* **aks:** enable parametrization of storage account used by loki ([#835](https://github.com/suyambuganesh82/devops-stack/issues/835)) ([0be4796](https://github.com/suyambuganesh82/devops-stack/commit/0be4796e2574b172fd56b1c083eff18c4e39b17c))
* **aks:** extend accepted params for node pools ([#780](https://github.com/suyambuganesh82/devops-stack/issues/780)) ([831557f](https://github.com/suyambuganesh82/devops-stack/commit/831557fe323b2bb90ae70685c6b4c0cd0fe9de6c))
* **aks:** set kubernetes version to current default ([4580f26](https://github.com/suyambuganesh82/devops-stack/commit/4580f2631b70da36a71b73c0acae8aa386fd6dcd))
* **aks:** upgrade Azure/aks/azurerm module to 4.13.0 ([f47168c](https://github.com/suyambuganesh82/devops-stack/commit/f47168c796fee935b36c7afacad5527ef2c9ce87))
* **aks:** upgrade azurerm provider to 2.62.1 ([c25accc](https://github.com/suyambuganesh82/devops-stack/commit/c25accc12f0ab0f740894b469a8041e04cd76997))
* allow changing prometheus oauth2 proxy args ([#852](https://github.com/suyambuganesh82/devops-stack/issues/852)) ([67c5d55](https://github.com/suyambuganesh82/devops-stack/commit/67c5d550db723b7e91c70999e9437c5d9f6a8402))
* allow to configure ArgoCD repositories ([aaa6d11](https://github.com/suyambuganesh82/devops-stack/commit/aaa6d113d95569b969f01f86104850dee3258e88))
* allow to deploy extra AppProject objects ([a57099b](https://github.com/suyambuganesh82/devops-stack/commit/a57099b6f8131795a0b17839d62a83db0b71d6b4))
* allow to disable wait_for_app_of_apps ([a01303b](https://github.com/suyambuganesh82/devops-stack/commit/a01303bcce252e40a2cf063d7fb2bd58aa4e58c2))
* allow to set AppProject's status ([3c3d6e0](https://github.com/suyambuganesh82/devops-stack/commit/3c3d6e0df136dfe7c3ccb95ebbe934ec70d15b5b))
* **antora:** use lunr generator in github action for building documentation search index ([2307150](https://github.com/suyambuganesh82/devops-stack/commit/23071502923435ac4aef026858f3ae3f49aa748b))
* app to node pool selection ([e22aa99](https://github.com/suyambuganesh82/devops-stack/commit/e22aa9926495abb98a92b6ee7641d18d8d4c30ca))
* **argocd-applicationset:** upgrade chart version to 1.0.0 ([16fee9d](https://github.com/suyambuganesh82/devops-stack/commit/16fee9d65a4310141c0d9b8932cfe5de393a1e9d))
* **argocd-notifications:** upgrade chart version to 1.4.1 ([da3f52c](https://github.com/suyambuganesh82/devops-stack/commit/da3f52c5722c88660d7d40241f9991aae1df0344))
* **argocd:** upgrade ArgoCD charts and use new repositories spec ([#741](https://github.com/suyambuganesh82/devops-stack/issues/741)) ([d4979c7](https://github.com/suyambuganesh82/devops-stack/commit/d4979c7808ccddecbda1a5bb431a05bc2f4428ff))
* **argocd:** upgrade ArgoCD components ([588124a](https://github.com/suyambuganesh82/devops-stack/commit/588124ac9e908b58e360546692b71c014c8cf7b7))
* **argocd:** upgrade to v2.0.5 ([f467290](https://github.com/suyambuganesh82/devops-stack/commit/f467290c965de75f7d7580da52d71dbb886cbc4b))
* **argocd:** upgrade to v2.1.0 ([3479d25](https://github.com/suyambuganesh82/devops-stack/commit/3479d2569d30c9eb71dcefa95244babc9758d712))
* **aws:** add test example ([7ddef46](https://github.com/suyambuganesh82/devops-stack/commit/7ddef46ae4c07d57bea85355059bb7980adb5c63))
* **aws:** use nip.io by default ([947380c](https://github.com/suyambuganesh82/devops-stack/commit/947380c9a2db763d380e3e11cc7d9384bbee4978))
* **azuread:** upgrade provider version 1.5.0 ([ce3f66d](https://github.com/suyambuganesh82/devops-stack/commit/ce3f66da34082285c83a49dbc92e3575360b00f8))
* **cert-manager:** allow modify http01 ingress section ([fa4558e](https://github.com/suyambuganesh82/devops-stack/commit/fa4558e896c8da4b0103023717df5d74f8f14541))
* **cert-manager:** allow multiple domains ([6cd1454](https://github.com/suyambuganesh82/devops-stack/commit/6cd145403f7cdb02379dc016ce5ac5af5575355c))
* **cert-manager:** allow multiple domains ([#904](https://github.com/suyambuganesh82/devops-stack/issues/904)) ([8635c3f](https://github.com/suyambuganesh82/devops-stack/commit/8635c3f14b463814bd96e22aa7b7be82ce446fb1))
* **cert-manager:** parameterize clusterissuers to allow overriding parameters ([a6fcb9b](https://github.com/suyambuganesh82/devops-stack/commit/a6fcb9b7c9e8b0e6bfc1458ea1e0757821452022))
* **cert-manager:** upgrade cert-manager to v1.4.3 ([3bc9c77](https://github.com/suyambuganesh82/devops-stack/commit/3bc9c77616d45c13b85daa2a21b01206683b8be6))
* change ArgoCD's default policy from read-only to none ([8bc9cda](https://github.com/suyambuganesh82/devops-stack/commit/8bc9cdaa9712ad12c0a951cd63e274c0be8d7de9))
* change version on the variable file ([71d37dd](https://github.com/suyambuganesh82/devops-stack/commit/71d37dd8422d9e74028237caf9e393d88ff41a0b))
* create dedicated AppProject for DevOps Stack Applications ([eadeaca](https://github.com/suyambuganesh82/devops-stack/commit/eadeacad677a7c6dc580d35d3e9f78536cc27c82))
* **csi-secrets-store-provider-azure:** upgrade to 0.2.0 ([9a86472](https://github.com/suyambuganesh82/devops-stack/commit/9a86472dd102c114f3e1df360870db9bd00c2ac3))
* **docs:** add SKS quickstart ([#784](https://github.com/suyambuganesh82/devops-stack/issues/784)) ([e26a5f1](https://github.com/suyambuganesh82/devops-stack/commit/e26a5f18fab283b35548629eac2d9b3b2b9e2275))
* **docs:** generate docs for Thanos chart ([09802b0](https://github.com/suyambuganesh82/devops-stack/commit/09802b0dc7a8edf7d3e6ca6aaee9d6c1af94b544))
* **docs:** improve KinD docs ([#820](https://github.com/suyambuganesh82/devops-stack/issues/820)) ([62fab9f](https://github.com/suyambuganesh82/devops-stack/commit/62fab9f89260a1d4938688afa1e29133aa93d988))
* **eks:** add cluster-autoscaler ([0c1d486](https://github.com/suyambuganesh82/devops-stack/commit/0c1d486493f821561a50b65e546f734f675fabbd))
* **eks:** add extra_lb_target_groups and extra_lb_http_tcp_listeners variables ([#853](https://github.com/suyambuganesh82/devops-stack/issues/853)) ([74d50cd](https://github.com/suyambuganesh82/devops-stack/commit/74d50cd5c4508b257ca6e006ee3d9884381c4af7))
* **eks:** enable cluster private access ([#860](https://github.com/suyambuganesh82/devops-stack/issues/860)) ([a1aa4b5](https://github.com/suyambuganesh82/devops-stack/commit/a1aa4b5b888062fe71bcb25565d7c43206850cd0))
* **eks:** expose map_accounts and map_users arguments ([501e3b5](https://github.com/suyambuganesh82/devops-stack/commit/501e3b5c417715de2c973767ef773043bac201c1))
* enable support for network policy in azure ([ff14031](https://github.com/suyambuganesh82/devops-stack/commit/ff14031467ab0a6eb6f6a284f906858397ed39f7))
* enable using url without cluster name ([#823](https://github.com/suyambuganesh82/devops-stack/issues/823)) ([7728b0f](https://github.com/suyambuganesh82/devops-stack/commit/7728b0f87c14023d89996d2e2b99c3b5dd7ea4ef))
* **gitlab ci:** upgrade argocd and terraform versions ([5ffd5be](https://github.com/suyambuganesh82/devops-stack/commit/5ffd5be2db725f26fd29bb4ce74c814d143cfb68))
* **grafana:** set default users role to Editor ([cd95c03](https://github.com/suyambuganesh82/devops-stack/commit/cd95c03dbf73a41c88fd811fe093ab18afe96da2))
* **k3s-docker:** add registry mirror for ghcr.io ([2d26d03](https://github.com/suyambuganesh82/devops-stack/commit/2d26d0325478e59ec1d07fd8c24066a1843aa8cd))
* **k3s-docker:** upgrade K3s to v1.20.7-k3s1 ([af1d43d](https://github.com/suyambuganesh82/devops-stack/commit/af1d43ddd3d3af26cc4ceae3b339dedd0a64fb9e))
* **k3s-libvirt:** upgrade k3os to v0.20.7-k3s1r0 ([873c72b](https://github.com/suyambuganesh82/devops-stack/commit/873c72b2553b11d5dde1335230546a4b43c9120e))
* **k3s:** add Keycloak's admin password to Terraform outputs ([305eb67](https://github.com/suyambuganesh82/devops-stack/commit/305eb670b5ea70c650eaf25a849ddb293c95a2a6))
* **k3s:** upgrade camptocamp/k3s/docker module ([0c419db](https://github.com/suyambuganesh82/devops-stack/commit/0c419dbce706c12018d0bed6f3fe670d0d76bd7b))
* **k3s:** upgrade K3s to 1.20.10+k3s1 ([6477ac6](https://github.com/suyambuganesh82/devops-stack/commit/6477ac6be446392d8fa87a8823968125395574cf))
* **k3s:** use minio as unique storage solution for Loki ([131beb2](https://github.com/suyambuganesh82/devops-stack/commit/131beb2bf48702240b300840d50de81a3644962a))
* **keycloak:** pass a user list to keycloak ([#788](https://github.com/suyambuganesh82/devops-stack/issues/788)) ([c2835ec](https://github.com/suyambuganesh82/devops-stack/commit/c2835ecaba5ffb02908fa77049cffecb976787e3))
* **keycloak:** rename client to devops-stack-applications ([ead90c7](https://github.com/suyambuganesh82/devops-stack/commit/ead90c7502e23fb1b23fcf20478cd07c225cd943))
* **keycloak:** rename user=admin to user=jdoe ([7ad68c5](https://github.com/suyambuganesh82/devops-stack/commit/7ad68c5314a1073e5dd6dc04eaca2b418d4585ed))
* **keycloak:** upgrade to v15.0.1 ([c7dfdbb](https://github.com/suyambuganesh82/devops-stack/commit/c7dfdbb9a998729b090168d1fa0405f4d3ee5666))
* **keycloak:** use embedded H2 database for Keycloak ([1c52e9b](https://github.com/suyambuganesh82/devops-stack/commit/1c52e9b02059b7037bad8512c241c1d8cdcd61e1))
* **kind:** add experimental support for KIND ([#785](https://github.com/suyambuganesh82/devops-stack/issues/785)) ([518e3e6](https://github.com/suyambuganesh82/devops-stack/commit/518e3e6885082429298607314215e15fcacb0d07))
* **kube-prometheus-stack:** upgrade chart to 18.0.1 ([#743](https://github.com/suyambuganesh82/devops-stack/issues/743)) ([103dfc6](https://github.com/suyambuganesh82/devops-stack/commit/103dfc67be8bfd0ee72ebd6fda60507211fdf163))
* **kube-prometheus-stack:** upgrade to 17.2.1 ([e065fd6](https://github.com/suyambuganesh82/devops-stack/commit/e065fd65cfe1730fc94c2d1b7d98b9f45dd6aa18))
* **kube-prometheus-stack:** upgrade to v18.0.0 ([3a299ed](https://github.com/suyambuganesh82/devops-stack/commit/3a299edb4aebdd417903c153f355630b7b6e7f8b))
* Loki is not the default datasource ([e0b17b8](https://github.com/suyambuganesh82/devops-stack/commit/e0b17b80e07d56ca606d7ec17ecc83166dc72b0e))
* **loki-stack:** add monitoring when filebeat logging is enabled ([5038df4](https://github.com/suyambuganesh82/devops-stack/commit/5038df422e4f0dbdc2594ce5735876d090476119))
* **loki:** upgrade v2.2.0 ([55ca7e2](https://github.com/suyambuganesh82/devops-stack/commit/55ca7e242382ac82fc49e32100b9a53b90812739))
* manage EFS in ews/eks only ([233984f](https://github.com/suyambuganesh82/devops-stack/commit/233984fb35219f7b030b77617c030230ae4880a8))
* **metrics-server:** update to v0.6.1 ([ed9eb96](https://github.com/suyambuganesh82/devops-stack/commit/ed9eb9612db106283e59ae45d86cded8eafe8edb))
* **oauth2-proxy:** upgrade to v7.1.3 ([3c16e67](https://github.com/suyambuganesh82/devops-stack/commit/3c16e67b05c4b2c4cf3231c9d5caf58f0ef3b394))
* output clusterid. This is used for group management ([eee0c74](https://github.com/suyambuganesh82/devops-stack/commit/eee0c74453a94a5abc40e3c417abbfcf91072f3f))
* randomize argocd admin password ([1cf91f0](https://github.com/suyambuganesh82/devops-stack/commit/1cf91f0aee30d369bc8ea8d0ad2a43c714c18a70))
* set CreateNamespace=true syncOption ([53bcc64](https://github.com/suyambuganesh82/devops-stack/commit/53bcc649b5d16af7b58c56465a5c8bd9cbc0b3ac))
* **sks:** add default dns domain and record ([#838](https://github.com/suyambuganesh82/devops-stack/issues/838)) ([8117ec8](https://github.com/suyambuganesh82/devops-stack/commit/8117ec8ee4eb5006b861aa734fd4457704fea86f))
* **sks:** add experimental SKS support ([7e5e929](https://github.com/suyambuganesh82/devops-stack/commit/7e5e9294b675c01bd8ac211c242e6cdcbc57ee5c))
* **sks:** add node anti-affinity on router nodes for cert-manager ([#753](https://github.com/suyambuganesh82/devops-stack/issues/753)) ([dc3a4a3](https://github.com/suyambuganesh82/devops-stack/commit/dc3a4a35f6b1250d852440d165b3775ce700aa6d))
* **sks:** add output for cluster security group id ([#816](https://github.com/suyambuganesh82/devops-stack/issues/816)) ([de31691](https://github.com/suyambuganesh82/devops-stack/commit/de31691b49cdafd7236d8a0395d2af2b8bc30d23))
* **sks:** add output for nlb ip address ([35d4ba9](https://github.com/suyambuganesh82/devops-stack/commit/35d4ba9cca1a022eaecad63a3083659fe72c0132))
* **sks:** dynamic gateway & wildcard dns records creation ([#897](https://github.com/suyambuganesh82/devops-stack/issues/897)) ([0327df9](https://github.com/suyambuganesh82/devops-stack/commit/0327df9fef2a4033146c758d471553c471ca9ec7))
* **sks:** expose local.kubernetes to outputs ([0adbe95](https://github.com/suyambuganesh82/devops-stack/commit/0adbe95e10473cd4fd4312548e93735d296d7e86))
* **sks:** update camptocamp's exoscale sks module to 0.4.0 ([#884](https://github.com/suyambuganesh82/devops-stack/issues/884)) ([7376b82](https://github.com/suyambuganesh82/devops-stack/commit/7376b825701bfa25bc379e3ccfa74bfb7c302cbc))
* **sks:** use Kubernetes 1.21.4 by default ([a95d813](https://github.com/suyambuganesh82/devops-stack/commit/a95d8135e962a03bf2a12845815af1af94cc2469))
* **sks:** use letsencrypt-prod when there is more than 1 node pool ([#754](https://github.com/suyambuganesh82/devops-stack/issues/754)) ([0f8179c](https://github.com/suyambuganesh82/devops-stack/commit/0f8179c0d83654442e658ead302ffd5f995a563d))
* **terraform:** upgrade to v1.0.4 ([d2984e4](https://github.com/suyambuganesh82/devops-stack/commit/d2984e418a541824d1960e1346a42251d0d6852b))
* **traefik:** allow disabling of dashboard's ingress and auth ([f310e28](https://github.com/suyambuganesh82/devops-stack/commit/f310e28b7da6256e25969f1eba63321400c16d37))
* **traefik:** tls version &gt;= 1.2 ([#793](https://github.com/suyambuganesh82/devops-stack/issues/793)) ([c49580e](https://github.com/suyambuganesh82/devops-stack/commit/c49580efa834d1a5001abb18f0d9cf120970efc3))
* **traefik:** upgrade to 2.4.13 ([f26a32e](https://github.com/suyambuganesh82/devops-stack/commit/f26a32e25464f0572035bf8b72b2524128218466))
* upgrade aad-pod-identity to v1.8.0 ([2865a40](https://github.com/suyambuganesh82/devops-stack/commit/2865a4002f39830f4f26aa5a93e263db9f89be0d))
* upgrade azurerm provider to 2.60.0 ([6ba8b57](https://github.com/suyambuganesh82/devops-stack/commit/6ba8b5774a4c5ea3b4190d1b8b8c075be840d0cb))
* upgrade azurerm provider to 2.62.0 ([3812cb8](https://github.com/suyambuganesh82/devops-stack/commit/3812cb8dbd184f0447821adef7a11532324057aa))
* upgrade secrets-store-csi-driver-provider-azure to v0.0.22 ([a4dc856](https://github.com/suyambuganesh82/devops-stack/commit/a4dc856edbbb791ea83a15bfa020852ce966bb71))
* upgrade Terraform to 1.0.0 ([489a650](https://github.com/suyambuganesh82/devops-stack/commit/489a650dc336061593e6c761eb51d9d6ad422477))
* use loose dependencies in Terraform modules ([af86e94](https://github.com/suyambuganesh82/devops-stack/commit/af86e947012a249f0db6db8cc47a04de7c8ed6f3))


### Bug Fixes

* add missing namespaces template ([0331a82](https://github.com/suyambuganesh82/devops-stack/commit/0331a827d3384aa6dd91f1a9d887c22931ae83ea))
* add missing pathType in Ingress ([f22de25](https://github.com/suyambuganesh82/devops-stack/commit/f22de25f6f3629e5d15eb1c6fd21526b54538a7d))
* add missing version contraint on null provider ([bda92f1](https://github.com/suyambuganesh82/devops-stack/commit/bda92f1a6f8d3152aa553ffd938102eaa1533fed))
* **aks:** allow multiple az identities in same namespace ([3da2163](https://github.com/suyambuganesh82/devops-stack/commit/3da216361cbede7361c7233e3ad45ce654b635e6))
* **aks:** azuread application use ms graph ([#845](https://github.com/suyambuganesh82/devops-stack/issues/845)) ([1ef031e](https://github.com/suyambuganesh82/devops-stack/commit/1ef031ed32ab70a3a50eef0b3dd4131a5ea9a80f))
* **aks:** bump default ochestration version for nodes to v1.21.9, v1.21.2 was dropped by Azure ([c6f6d72](https://github.com/suyambuganesh82/devops-stack/commit/c6f6d72a2525c12d8d2b206c54f21977e1f51a29))
* **aks:** cert-manager dns solver ([a9f3782](https://github.com/suyambuganesh82/devops-stack/commit/a9f3782dd1f05cc80462f345edf665b96b9ef227))
* **aks:** do not ignore orchestrator_version ([c3a2196](https://github.com/suyambuganesh82/devops-stack/commit/c3a21963003f7251b5582ee7da797e9f6b455bf8))
* **aks:** expose UAI's principal IDs ([c857a98](https://github.com/suyambuganesh82/devops-stack/commit/c857a98336365f8a0b0003ec38f5a59a40db2d2b))
* **aks:** prometheus use by default disk storage pvc ([fd71d9e](https://github.com/suyambuganesh82/devops-stack/commit/fd71d9e45b0072643f7c3a478ab6bc0ee0b67eee))
* **aks:** use local.base_domain instead of var.base_domain ([c417678](https://github.com/suyambuganesh82/devops-stack/commit/c417678e34b31011def356998dba864668a5cf59))
* **aks:** use soft dependency between cluster and data source ([#855](https://github.com/suyambuganesh82/devops-stack/issues/855)) ([7ee918a](https://github.com/suyambuganesh82/devops-stack/commit/7ee918a12f99eb5ee4a17ab70311ad43dda4ea4f))
* argocd secret dependency ([cc5499d](https://github.com/suyambuganesh82/devops-stack/commit/cc5499d12779d8f6caa2ed5e365dceab978f63b3))
* **argocd:** allow passing heterogeneous extra elements ([1552361](https://github.com/suyambuganesh82/devops-stack/commit/15523613b330975019d30a2dcad89eb2af8226ef))
* **argocd:** fix health assessment for Applications ([c7a46cb](https://github.com/suyambuganesh82/devops-stack/commit/c7a46cbe0b3aa4cc134c0e20bd034a883c146e3f))
* **argocd:** fix kube-prometheus-stack dependency on OIDC ([#795](https://github.com/suyambuganesh82/devops-stack/issues/795)) ([5848af8](https://github.com/suyambuganesh82/devops-stack/commit/5848af8970a8c273b8243fae3f5dd98167af17d2))
* AWS: Filter DNS challenge only on base domain ([e76fd3b](https://github.com/suyambuganesh82/devops-stack/commit/e76fd3b8d9e553c07c41876562cdd1fa1f96708b))
* **aws:** don't add nat gateway to cluster_endpoint_public_access_cidrs by default ([54625b0](https://github.com/suyambuganesh82/devops-stack/commit/54625b04199b9c9920d5bed9b43c769018093a5b))
* **aws:** use local.base_domain instead of var.base_domain ([2583e09](https://github.com/suyambuganesh82/devops-stack/commit/2583e092b27651bfb60508805b972136825681af))
* Azure: Filter DNS challenge only on base domain ([687629e](https://github.com/suyambuganesh82/devops-stack/commit/687629e7412127a27c807f320e692daef6536e9d)), closes [#700](https://github.com/suyambuganesh82/devops-stack/issues/700)
* **azure:** disable implicit grant for OAuth2 clients ([#857](https://github.com/suyambuganesh82/devops-stack/issues/857)) ([d448afa](https://github.com/suyambuganesh82/devops-stack/commit/d448afa8e99635b4fac51611f2573eeeb6a3d4ec))
* can(oidc.prometheus_oauth2_proxy_extra_volume_mounts) returns true when empty list ([#894](https://github.com/suyambuganesh82/devops-stack/issues/894)) ([0be6b03](https://github.com/suyambuganesh82/devops-stack/commit/0be6b031fb0752720c5478cb75183e79ce635fe9))
* **cert-manager:** incompatibility with k8s &gt;= 1.22 ([#892](https://github.com/suyambuganesh82/devops-stack/issues/892)) ([1344cc0](https://github.com/suyambuganesh82/devops-stack/commit/1344cc04c63750ef0cd23e7e2136e2ae387289dc))
* **cognito:** set default null values to cognito_user_pool_id and cognito_user_pool_domain variables ([b218e77](https://github.com/suyambuganesh82/devops-stack/commit/b218e779d7cada190a012291da4ccf41df94c7be))
* **csi-secrets-store-azure:** repo url ([6142426](https://github.com/suyambuganesh82/devops-stack/commit/6142426474b9d0755f255a5f0b1a896288469474))
* deploy keys should not be tight to the DevOps Stack ([53d53da](https://github.com/suyambuganesh82/devops-stack/commit/53d53da85b1efda828a7d60e31f98325237d9c1c))
* **doc:** default target version and a missing aks module's reference ([#841](https://github.com/suyambuganesh82/devops-stack/issues/841)) ([4fb1abe](https://github.com/suyambuganesh82/devops-stack/commit/4fb1abe2a57af7c9d7841232652448ebd7b92d5b))
* **doc:** homogenize name 'DevOps Stack' ([95c9e82](https://github.com/suyambuganesh82/devops-stack/commit/95c9e82449bba7f758dec0ebb9be46d8d481fa3b))
* **docs:** add kubectl note ([#827](https://github.com/suyambuganesh82/devops-stack/issues/827)) ([b955051](https://github.com/suyambuganesh82/devops-stack/commit/b9550517e755c7b5d48f80a121f3a73447cadf58))
* **docs:** remove cgroupv2 note ([#825](https://github.com/suyambuganesh82/devops-stack/issues/825)) ([97e3437](https://github.com/suyambuganesh82/devops-stack/commit/97e34374e5eb32f140c89725ace8101b75bdc5d9))
* **eks:** keycloak admin pass output when not installed ([#817](https://github.com/suyambuganesh82/devops-stack/issues/817)) ([980979b](https://github.com/suyambuganesh82/devops-stack/commit/980979b1f4ab443a6689f6fbce8845b24bebd70f))
* **eks:** make extra_lb_target_groups and extra_lb_http_tcp_listeners optional ([#858](https://github.com/suyambuganesh82/devops-stack/issues/858)) ([dd1c58c](https://github.com/suyambuganesh82/devops-stack/commit/dd1c58cb948449552ed2492ed3e2ea8d4d218d6c))
* **eks:** NLB dns query when public NLB is not created ([b8f4647](https://github.com/suyambuganesh82/devops-stack/commit/b8f4647cd8af934c07d5abc1e58db863e2b415b8))
* **eks:** pass missing arg to function ([5b72586](https://github.com/suyambuganesh82/devops-stack/commit/5b725867cd2ef5e95bb148b2cfe678d932843ce8))
* **eks:** private nlb terraform module version ([802b6f1](https://github.com/suyambuganesh82/devops-stack/commit/802b6f1eff5e6e5f2dfee7d7e5dbd64232ddad55))
* **eks:** send http traffic on NLB to port 80 on cluster ([#810](https://github.com/suyambuganesh82/devops-stack/issues/810)) ([0cbd0eb](https://github.com/suyambuganesh82/devops-stack/commit/0cbd0eb05fcb818a623fa70489ad6b5f9302198b))
* fix cluster-issuer deployment refactoring ([0687ce5](https://github.com/suyambuganesh82/devops-stack/commit/0687ce5aaf841a1c102662687cdb222c7f98fcac))
* fix weird character in template ([6c903c3](https://github.com/suyambuganesh82/devops-stack/commit/6c903c34706b21050adc1a3446e7ea374bbad419))
* Force HTTPS and use a Let's encrypt certificate ([f8c3cb3](https://github.com/suyambuganesh82/devops-stack/commit/f8c3cb36abbb53f98a7e29faa8842e4e90c98aa2))
* forceNameSpaced was deprecated in favour of forceNamespaced ([aedbcb7](https://github.com/suyambuganesh82/devops-stack/commit/aedbcb718d8f92762be18ec83104268acf2c5325))
* format with terraform fmt ([33a499e](https://github.com/suyambuganesh82/devops-stack/commit/33a499e2e6f6ec12a75b1d43f402cacbcc409869))
* **k3s:** add missing cluster name in URLs ([093919b](https://github.com/suyambuganesh82/devops-stack/commit/093919b5361cff0b64091d239d3db28e3cde68cc))
* **keycloak:** add missing scopes to client ([a86403b](https://github.com/suyambuganesh82/devops-stack/commit/a86403b086af1fb518ce739235516423a5ae36cb))
* **keycloak:** invalid ingress ressource on v1beta1 api on k8s &gt;= 1.22 ([#890](https://github.com/suyambuganesh82/devops-stack/issues/890)) ([581d40d](https://github.com/suyambuganesh82/devops-stack/commit/581d40d4c1d035a03cba78b9c37ce712e6ac11af))
* **metrics-server:** use release tag ([5cc33cf](https://github.com/suyambuganesh82/devops-stack/commit/5cc33cff3f803b04246b9bf1fd84b2147d308f3c))
* **prometheus:** drop thanos hard ref to version ([bac8993](https://github.com/suyambuganesh82/devops-stack/commit/bac89936c85ee02d059a531ddd441dd812e6861b))
* release version ([#839](https://github.com/suyambuganesh82/devops-stack/issues/839)) ([e2334c2](https://github.com/suyambuganesh82/devops-stack/commit/e2334c2d7bafe99e2d370a0d42a1b0fa18ac14c9))
* removed static argocd password ([3b99414](https://github.com/suyambuganesh82/devops-stack/commit/3b99414985c290c3cde499ef8b5361dfdcdac147))
* selector in same block ([d53cd33](https://github.com/suyambuganesh82/devops-stack/commit/d53cd33c593e85e3a0e69482617aced675a4be69))
* **sks:** invalid ressource exoscale_domain.this on domain record wildcard ([#887](https://github.com/suyambuganesh82/devops-stack/issues/887)) ([b82b3fd](https://github.com/suyambuganesh82/devops-stack/commit/b82b3fd6b1e6507299ccad191d487adeff26caec))
* **sks:** pass down missing variables to argocd-helm ([#748](https://github.com/suyambuganesh82/devops-stack/issues/748)) ([97f3973](https://github.com/suyambuganesh82/devops-stack/commit/97f397369e558c0b7a32841cedded4027214f8c5))
* **sks:** type mismatch into coalesce call for nodepools definitions ([#891](https://github.com/suyambuganesh82/devops-stack/issues/891)) ([7dc6c32](https://github.com/suyambuganesh82/devops-stack/commit/7dc6c3221b41fe1ebe7baae39c6053625518969b))
* team owns code instead of individuals ([2ba2971](https://github.com/suyambuganesh82/devops-stack/commit/2ba2971a32dc4b9ec27caa6e6651e2009e6a4af9))
* **traefik:** update image version which corrects a security issue ([91aa10c](https://github.com/suyambuganesh82/devops-stack/commit/91aa10c605d25797242fe21f2e954d88f1207c56))
* update reference adoc files ([475d688](https://github.com/suyambuganesh82/devops-stack/commit/475d688e301998fff7f0cf97340defb7b8a0ec94))
* update reference adoc files ([#691](https://github.com/suyambuganesh82/devops-stack/issues/691)) ([70a2305](https://github.com/suyambuganesh82/devops-stack/commit/70a230554be619e09ee949b4b69aa945d8bec0df))
* upgrade k3s/docker module ([774f3e7](https://github.com/suyambuganesh82/devops-stack/commit/774f3e7c61465eadc54c1c634420d4b6c247fe94))
* use random_password instead of random_string ([b17f6dd](https://github.com/suyambuganesh82/devops-stack/commit/b17f6dde9ae607cdc881dee4baf6871658633c3a))
* **website:** build on published ([#831](https://github.com/suyambuganesh82/devops-stack/issues/831)) ([d5a31d2](https://github.com/suyambuganesh82/devops-stack/commit/d5a31d29461d4cb89b8adbcdffe55194abc3358c))
* **website:** build on released ([#833](https://github.com/suyambuganesh82/devops-stack/issues/833)) ([df08655](https://github.com/suyambuganesh82/devops-stack/commit/df08655d842f9ddd0e5497742f1eb61d7076e520))
* **website:** build website on release published ([#829](https://github.com/suyambuganesh82/devops-stack/issues/829)) ([bc52f82](https://github.com/suyambuganesh82/devops-stack/commit/bc52f82813f4d3b7f4d85103fdaca9acb5d8d36d))
* wrong quoting ([d29029e](https://github.com/suyambuganesh82/devops-stack/commit/d29029e58f0ac257b7b24b7e2cc15b978e69fcbd))

## [0.61.0](https://github.com/camptocamp/devops-stack/compare/v0.60.2...v0.61.0) (2022-12-14)


### Features

* **aad_pod_identity:** update chart ([996a03a](https://github.com/camptocamp/devops-stack/commit/996a03a6e0215ab952bdc10cf69b9d4a4b052835))

## [0.60.2](https://github.com/camptocamp/devops-stack/compare/v0.60.1...v0.60.2) (2022-11-16)


### Bug Fixes

* **aks:** prometheus use by default disk storage pvc ([fd71d9e](https://github.com/camptocamp/devops-stack/commit/fd71d9e45b0072643f7c3a478ab6bc0ee0b67eee))

## [0.60.1](https://github.com/camptocamp/devops-stack/compare/v0.60.0...v0.60.1) (2022-11-14)


### Bug Fixes

* **prometheus:** drop thanos hard ref to version ([bac8993](https://github.com/camptocamp/devops-stack/commit/bac89936c85ee02d059a531ddd441dd812e6861b))

## [0.60.0](https://github.com/camptocamp/devops-stack/compare/v0.59.3...v0.60.0) (2022-11-14)


### Features

* **cert-manager:** allow modify http01 ingress section ([fa4558e](https://github.com/camptocamp/devops-stack/commit/fa4558e896c8da4b0103023717df5d74f8f14541))
* **cert-manager:** allow multiple domains ([6cd1454](https://github.com/camptocamp/devops-stack/commit/6cd145403f7cdb02379dc016ce5ac5af5575355c))
* change version on the variable file ([71d37dd](https://github.com/camptocamp/devops-stack/commit/71d37dd8422d9e74028237caf9e393d88ff41a0b))
* Loki is not the default datasource ([e0b17b8](https://github.com/camptocamp/devops-stack/commit/e0b17b80e07d56ca606d7ec17ecc83166dc72b0e))
* **traefik:** allow disabling of dashboard's ingress and auth ([f310e28](https://github.com/camptocamp/devops-stack/commit/f310e28b7da6256e25969f1eba63321400c16d37))

## [0.59.3](https://github.com/camptocamp/devops-stack/compare/v0.59.2...v0.59.3) (2022-10-13)


### Bug Fixes

* **traefik:** update image version which corrects a security issue ([91aa10c](https://github.com/camptocamp/devops-stack/commit/91aa10c605d25797242fe21f2e954d88f1207c56))

## [0.59.2](https://github.com/camptocamp/devops-stack/compare/v0.59.1...v0.59.2) (2022-10-11)


### Bug Fixes

* **aks:** do not ignore orchestrator_version ([c3a2196](https://github.com/camptocamp/devops-stack/commit/c3a21963003f7251b5582ee7da797e9f6b455bf8))

## [0.59.1](https://github.com/camptocamp/devops-stack/compare/v0.59.0...v0.59.1) (2022-09-06)


### Bug Fixes

* **csi-secrets-store-azure:** repo url ([6142426](https://github.com/camptocamp/devops-stack/commit/6142426474b9d0755f255a5f0b1a896288469474))
* Force HTTPS and use a Let's encrypt certificate ([f8c3cb3](https://github.com/camptocamp/devops-stack/commit/f8c3cb36abbb53f98a7e29faa8842e4e90c98aa2))
* removed static argocd password ([3b99414](https://github.com/camptocamp/devops-stack/commit/3b99414985c290c3cde499ef8b5361dfdcdac147))

## [0.59.0](https://github.com/camptocamp/devops-stack/compare/v0.58.0...v0.59.0) (2022-07-19)


### Features

* activate traefik dashboard with oidc support ([ed291d7](https://github.com/camptocamp/devops-stack/commit/ed291d7eb3ce432ee580910ba08702cd5fc1760a))

## [0.58.0](https://github.com/camptocamp/devops-stack/compare/v0.57.0...v0.58.0) (2022-07-06)


### Features

* add codeowners, contributing and security instructions ([dee2d3b](https://github.com/camptocamp/devops-stack/commit/dee2d3b4945e587e68d94561afb6d8c5f9f68566))
* **gitlab ci:** upgrade argocd and terraform versions ([5ffd5be](https://github.com/camptocamp/devops-stack/commit/5ffd5be2db725f26fd29bb4ce74c814d143cfb68))
* **metrics-server:** update to v0.6.1 ([ed9eb96](https://github.com/camptocamp/devops-stack/commit/ed9eb9612db106283e59ae45d86cded8eafe8edb))


### Bug Fixes

* **cognito:** set default null values to cognito_user_pool_id and cognito_user_pool_domain variables ([b218e77](https://github.com/camptocamp/devops-stack/commit/b218e779d7cada190a012291da4ccf41df94c7be))
* **eks:** NLB dns query when public NLB is not created ([b8f4647](https://github.com/camptocamp/devops-stack/commit/b8f4647cd8af934c07d5abc1e58db863e2b415b8))
* **eks:** private nlb terraform module version ([802b6f1](https://github.com/camptocamp/devops-stack/commit/802b6f1eff5e6e5f2dfee7d7e5dbd64232ddad55))
* **metrics-server:** use release tag ([5cc33cf](https://github.com/camptocamp/devops-stack/commit/5cc33cff3f803b04246b9bf1fd84b2147d308f3c))
* team owns code instead of individuals ([2ba2971](https://github.com/camptocamp/devops-stack/commit/2ba2971a32dc4b9ec27caa6e6651e2009e6a4af9))

## [0.57.0](https://github.com/camptocamp/devops-stack/compare/v0.56.0...v0.57.0) (2022-05-30)


### Features

* **cert-manager:** allow multiple domains ([#904](https://github.com/camptocamp/devops-stack/issues/904)) ([8635c3f](https://github.com/camptocamp/devops-stack/commit/8635c3f14b463814bd96e22aa7b7be82ce446fb1))


### Bug Fixes

* **aks:** cert-manager dns solver ([a9f3782](https://github.com/camptocamp/devops-stack/commit/a9f3782dd1f05cc80462f345edf665b96b9ef227))
* can(oidc.prometheus_oauth2_proxy_extra_volume_mounts) returns true when empty list ([#894](https://github.com/camptocamp/devops-stack/issues/894)) ([0be6b03](https://github.com/camptocamp/devops-stack/commit/0be6b031fb0752720c5478cb75183e79ce635fe9))

## [0.56.0](https://github.com/camptocamp/devops-stack/compare/v0.55.0...v0.56.0) (2022-05-04)


### Features

* **sks:** dynamic gateway & wildcard dns records creation ([#897](https://github.com/camptocamp/devops-stack/issues/897)) ([0327df9](https://github.com/camptocamp/devops-stack/commit/0327df9fef2a4033146c758d471553c471ca9ec7))


### Bug Fixes

* **cert-manager:** incompatibility with k8s >= 1.22 ([#892](https://github.com/camptocamp/devops-stack/issues/892)) ([1344cc0](https://github.com/camptocamp/devops-stack/commit/1344cc04c63750ef0cd23e7e2136e2ae387289dc))
* **keycloak:** invalid ingress ressource on v1beta1 api on k8s >= 1.22 ([#890](https://github.com/camptocamp/devops-stack/issues/890)) ([581d40d](https://github.com/camptocamp/devops-stack/commit/581d40d4c1d035a03cba78b9c37ce712e6ac11af))
* **sks:** type mismatch into coalesce call for nodepools definitions ([#891](https://github.com/camptocamp/devops-stack/issues/891)) ([7dc6c32](https://github.com/camptocamp/devops-stack/commit/7dc6c3221b41fe1ebe7baae39c6053625518969b))

## [0.55.0](https://github.com/camptocamp/devops-stack/compare/v0.54.2...v0.55.0) (2022-04-04)


### Features

* add extra_volume_mount variable for prometheus oauth sidecar ([#889](https://github.com/camptocamp/devops-stack/issues/889)) ([6342db9](https://github.com/camptocamp/devops-stack/commit/6342db9493a0f0474854aaf8e7732524b20b58e3))
* allow changing prometheus oauth2 proxy args ([#852](https://github.com/camptocamp/devops-stack/issues/852)) ([67c5d55](https://github.com/camptocamp/devops-stack/commit/67c5d550db723b7e91c70999e9437c5d9f6a8402))
* **sks:** add default dns domain and record ([#838](https://github.com/camptocamp/devops-stack/issues/838)) ([8117ec8](https://github.com/camptocamp/devops-stack/commit/8117ec8ee4eb5006b861aa734fd4457704fea86f))
* **sks:** update camptocamp's exoscale sks module to 0.4.0 ([#884](https://github.com/camptocamp/devops-stack/issues/884)) ([7376b82](https://github.com/camptocamp/devops-stack/commit/7376b825701bfa25bc379e3ccfa74bfb7c302cbc))


### Bug Fixes

* **sks:** invalid ressource exoscale_domain.this on domain record wildcard ([#887](https://github.com/camptocamp/devops-stack/issues/887)) ([b82b3fd](https://github.com/camptocamp/devops-stack/commit/b82b3fd6b1e6507299ccad191d487adeff26caec))

### [0.54.2](https://www.github.com/camptocamp/devops-stack/compare/v0.54.1...v0.54.2) (2022-02-17)


### Bug Fixes

* **aks:** allow multiple az identities in same namespace ([3da2163](https://www.github.com/camptocamp/devops-stack/commit/3da216361cbede7361c7233e3ad45ce654b635e6))
* **aks:** bump default ochestration version for nodes to v1.21.9, v1.21.2 was dropped by Azure ([c6f6d72](https://www.github.com/camptocamp/devops-stack/commit/c6f6d72a2525c12d8d2b206c54f21977e1f51a29))

### [0.54.1](https://www.github.com/camptocamp/devops-stack/compare/v0.54.0...v0.54.1) (2022-02-16)


### Bug Fixes

* add missing namespaces template ([0331a82](https://www.github.com/camptocamp/devops-stack/commit/0331a827d3384aa6dd91f1a9d887c22931ae83ea))

## [0.54.0](https://www.github.com/camptocamp/devops-stack/compare/v0.53.0...v0.54.0) (2022-02-16)


### Features

* app to node pool selection ([e22aa99](https://www.github.com/camptocamp/devops-stack/commit/e22aa9926495abb98a92b6ee7641d18d8d4c30ca))
* **eks:** enable cluster private access ([#860](https://www.github.com/camptocamp/devops-stack/issues/860)) ([a1aa4b5](https://www.github.com/camptocamp/devops-stack/commit/a1aa4b5b888062fe71bcb25565d7c43206850cd0))


### Bug Fixes

* **aks:** use soft dependency between cluster and data source ([#855](https://www.github.com/camptocamp/devops-stack/issues/855)) ([7ee918a](https://www.github.com/camptocamp/devops-stack/commit/7ee918a12f99eb5ee4a17ab70311ad43dda4ea4f))
* **argocd:** allow passing heterogeneous extra elements ([1552361](https://www.github.com/camptocamp/devops-stack/commit/15523613b330975019d30a2dcad89eb2af8226ef))
* **azure:** disable implicit grant for OAuth2 clients ([#857](https://www.github.com/camptocamp/devops-stack/issues/857)) ([d448afa](https://www.github.com/camptocamp/devops-stack/commit/d448afa8e99635b4fac51611f2573eeeb6a3d4ec))
* **eks:** make extra_lb_target_groups and extra_lb_http_tcp_listeners optional ([#858](https://www.github.com/camptocamp/devops-stack/issues/858)) ([dd1c58c](https://www.github.com/camptocamp/devops-stack/commit/dd1c58cb948449552ed2492ed3e2ea8d4d218d6c))

## [0.53.0](https://www.github.com/camptocamp/devops-stack/compare/v0.52.0...v0.53.0) (2022-02-07)


### Features

* **eks:** add extra_lb_target_groups and extra_lb_http_tcp_listeners variables ([#853](https://www.github.com/camptocamp/devops-stack/issues/853)) ([74d50cd](https://www.github.com/camptocamp/devops-stack/commit/74d50cd5c4508b257ca6e006ee3d9884381c4af7))
* **sks:** expose local.kubernetes to outputs ([0adbe95](https://www.github.com/camptocamp/devops-stack/commit/0adbe95e10473cd4fd4312548e93735d296d7e86))

## [0.52.0](https://www.github.com/camptocamp/devops-stack/compare/v0.51.1...v0.52.0) (2022-01-14)


### Features

* **aks:** add agents_pool_name, agents_label and sku_tier params to module interface ([#846](https://www.github.com/camptocamp/devops-stack/issues/846)) ([964ed0b](https://www.github.com/camptocamp/devops-stack/commit/964ed0bf8a7f3f137d9f0cd7a8bed8c1c153a596))


### Bug Fixes

* **aks:** azuread application use ms graph ([#845](https://www.github.com/camptocamp/devops-stack/issues/845)) ([1ef031e](https://www.github.com/camptocamp/devops-stack/commit/1ef031ed32ab70a3a50eef0b3dd4131a5ea9a80f))
* **doc:** default target version and a missing aks module's reference ([#841](https://www.github.com/camptocamp/devops-stack/issues/841)) ([4fb1abe](https://www.github.com/camptocamp/devops-stack/commit/4fb1abe2a57af7c9d7841232652448ebd7b92d5b))

### [0.51.1](https://www.github.com/camptocamp/devops-stack/compare/v0.51.0...v0.51.1) (2021-12-16)


### Bug Fixes

* release version ([#839](https://www.github.com/camptocamp/devops-stack/issues/839)) ([e2334c2](https://www.github.com/camptocamp/devops-stack/commit/e2334c2d7bafe99e2d370a0d42a1b0fa18ac14c9))

## [0.51.0](https://www.github.com/camptocamp/devops-stack/compare/v0.50.4...v0.51.0) (2021-12-14)


### Features

* **aks:** enable parametrization of storage account used by loki ([#835](https://www.github.com/camptocamp/devops-stack/issues/835)) ([0be4796](https://www.github.com/camptocamp/devops-stack/commit/0be4796e2574b172fd56b1c083eff18c4e39b17c))

### [0.50.4](https://www.github.com/camptocamp/devops-stack/compare/v0.50.3...v0.50.4) (2021-12-08)


### Bug Fixes

* **website:** build on released ([#833](https://www.github.com/camptocamp/devops-stack/issues/833)) ([df08655](https://www.github.com/camptocamp/devops-stack/commit/df08655d842f9ddd0e5497742f1eb61d7076e520))

### [0.50.3](https://www.github.com/camptocamp/devops-stack/compare/v0.50.2...v0.50.3) (2021-12-08)


### Bug Fixes

* **website:** build on published ([#831](https://www.github.com/camptocamp/devops-stack/issues/831)) ([d5a31d2](https://www.github.com/camptocamp/devops-stack/commit/d5a31d29461d4cb89b8adbcdffe55194abc3358c))

### [0.50.2](https://www.github.com/camptocamp/devops-stack/compare/v0.50.1...v0.50.2) (2021-12-07)


### Bug Fixes

* **website:** build website on release published ([#829](https://www.github.com/camptocamp/devops-stack/issues/829)) ([bc52f82](https://www.github.com/camptocamp/devops-stack/commit/bc52f82813f4d3b7f4d85103fdaca9acb5d8d36d))

### [0.50.1](https://www.github.com/camptocamp/devops-stack/compare/v0.50.0...v0.50.1) (2021-12-07)


### Bug Fixes

* **docs:** add kubectl note ([#827](https://www.github.com/camptocamp/devops-stack/issues/827)) ([b955051](https://www.github.com/camptocamp/devops-stack/commit/b9550517e755c7b5d48f80a121f3a73447cadf58))
* **docs:** remove cgroupv2 note ([#825](https://www.github.com/camptocamp/devops-stack/issues/825)) ([97e3437](https://www.github.com/camptocamp/devops-stack/commit/97e34374e5eb32f140c89725ace8101b75bdc5d9))

## [0.50.0](https://www.github.com/camptocamp/devops-stack/compare/v0.49.0...v0.50.0) (2021-12-03)


### Features

* **docs:** improve KinD docs ([#820](https://www.github.com/camptocamp/devops-stack/issues/820)) ([62fab9f](https://www.github.com/camptocamp/devops-stack/commit/62fab9f89260a1d4938688afa1e29133aa93d988))
* enable using url without cluster name ([#823](https://www.github.com/camptocamp/devops-stack/issues/823)) ([7728b0f](https://www.github.com/camptocamp/devops-stack/commit/7728b0f87c14023d89996d2e2b99c3b5dd7ea4ef))

## [0.49.0](https://www.github.com/camptocamp/devops-stack/compare/v0.48.0...v0.49.0) (2021-11-19)


### ⚠ BREAKING CHANGES

* **eks:** send http traffic on NLB to port 80 on cluster (#810)

### Features

* **keycloak:** pass a user list to keycloak ([#788](https://www.github.com/camptocamp/devops-stack/issues/788)) ([c2835ec](https://www.github.com/camptocamp/devops-stack/commit/c2835ecaba5ffb02908fa77049cffecb976787e3))
* **kind:** add experimental support for KIND ([#785](https://www.github.com/camptocamp/devops-stack/issues/785)) ([518e3e6](https://www.github.com/camptocamp/devops-stack/commit/518e3e6885082429298607314215e15fcacb0d07))
* **sks:** add output for cluster security group id ([#816](https://www.github.com/camptocamp/devops-stack/issues/816)) ([de31691](https://www.github.com/camptocamp/devops-stack/commit/de31691b49cdafd7236d8a0395d2af2b8bc30d23))
* **traefik:** tls version >= 1.2 ([#793](https://www.github.com/camptocamp/devops-stack/issues/793)) ([c49580e](https://www.github.com/camptocamp/devops-stack/commit/c49580efa834d1a5001abb18f0d9cf120970efc3))


### Bug Fixes

* **argocd:** fix kube-prometheus-stack dependency on OIDC ([#795](https://www.github.com/camptocamp/devops-stack/issues/795)) ([5848af8](https://www.github.com/camptocamp/devops-stack/commit/5848af8970a8c273b8243fae3f5dd98167af17d2))
* **eks:** keycloak admin pass output when not installed ([#817](https://www.github.com/camptocamp/devops-stack/issues/817)) ([980979b](https://www.github.com/camptocamp/devops-stack/commit/980979b1f4ab443a6689f6fbce8845b24bebd70f))
* **eks:** send http traffic on NLB to port 80 on cluster ([#810](https://www.github.com/camptocamp/devops-stack/issues/810)) ([0cbd0eb](https://www.github.com/camptocamp/devops-stack/commit/0cbd0eb05fcb818a623fa70489ad6b5f9302198b))

## [0.48.0](https://www.github.com/camptocamp/devops-stack/compare/v0.47.0...v0.48.0) (2021-09-22)


### Features

* **aks:** add kubelet identity to outputs ([f883650](https://www.github.com/camptocamp/devops-stack/commit/f883650310fbd6e6828af4531d9ddf1855599653))
* **aks:** extend accepted params for node pools ([#780](https://www.github.com/camptocamp/devops-stack/issues/780)) ([831557f](https://www.github.com/camptocamp/devops-stack/commit/831557fe323b2bb90ae70685c6b4c0cd0fe9de6c))
* **docs:** add SKS quickstart ([#784](https://www.github.com/camptocamp/devops-stack/issues/784)) ([e26a5f1](https://www.github.com/camptocamp/devops-stack/commit/e26a5f18fab283b35548629eac2d9b3b2b9e2275))


### Bug Fixes

* **aks:** use local.base_domain instead of var.base_domain ([c417678](https://www.github.com/camptocamp/devops-stack/commit/c417678e34b31011def356998dba864668a5cf59))
* **doc:** homogenize name 'DevOps Stack' ([95c9e82](https://www.github.com/camptocamp/devops-stack/commit/95c9e82449bba7f758dec0ebb9be46d8d481fa3b))

## [0.47.0](https://www.github.com/camptocamp/devops-stack/compare/v0.46.0...v0.47.0) (2021-09-15)


### Features

* **keycloak:** rename client to devops-stack-applications ([ead90c7](https://www.github.com/camptocamp/devops-stack/commit/ead90c7502e23fb1b23fcf20478cd07c225cd943))
* **keycloak:** upgrade to v15.0.1 ([c7dfdbb](https://www.github.com/camptocamp/devops-stack/commit/c7dfdbb9a998729b090168d1fa0405f4d3ee5666))
* **loki-stack:** add monitoring when filebeat logging is enabled ([5038df4](https://www.github.com/camptocamp/devops-stack/commit/5038df422e4f0dbdc2594ce5735876d090476119))


### Bug Fixes

* **keycloak:** add missing scopes to client ([a86403b](https://www.github.com/camptocamp/devops-stack/commit/a86403b086af1fb518ce739235516423a5ae36cb))

## [0.46.0](https://www.github.com/camptocamp/devops-stack/compare/v0.45.0...v0.46.0) (2021-09-10)


### Features

* Add initial support for OpenTelekomCloud's CCE ([a7e374b](https://www.github.com/camptocamp/devops-stack/commit/a7e374bdae98da58548902f2ef80c49b104e0394))
* **aks:** add support for node pools in AKS ([edb9813](https://www.github.com/camptocamp/devops-stack/commit/edb981339ef566e21ae16338bc7e6c17699da9d9))
* allow to disable wait_for_app_of_apps ([a01303b](https://www.github.com/camptocamp/devops-stack/commit/a01303bcce252e40a2cf063d7fb2bd58aa4e58c2))
* **antora:** use lunr generator in github action for building documentation search index ([2307150](https://www.github.com/camptocamp/devops-stack/commit/23071502923435ac4aef026858f3ae3f49aa748b))
* **aws:** add test example ([7ddef46](https://www.github.com/camptocamp/devops-stack/commit/7ddef46ae4c07d57bea85355059bb7980adb5c63))
* **aws:** use nip.io by default ([947380c](https://www.github.com/camptocamp/devops-stack/commit/947380c9a2db763d380e3e11cc7d9384bbee4978))
* **keycloak:** rename user=admin to user=jdoe ([7ad68c5](https://www.github.com/camptocamp/devops-stack/commit/7ad68c5314a1073e5dd6dc04eaca2b418d4585ed))
* randomize argocd admin password ([1cf91f0](https://www.github.com/camptocamp/devops-stack/commit/1cf91f0aee30d369bc8ea8d0ad2a43c714c18a70))
* **sks:** add node anti-affinity on router nodes for cert-manager ([#753](https://www.github.com/camptocamp/devops-stack/issues/753)) ([dc3a4a3](https://www.github.com/camptocamp/devops-stack/commit/dc3a4a35f6b1250d852440d165b3775ce700aa6d))
* **sks:** add output for nlb ip address ([35d4ba9](https://www.github.com/camptocamp/devops-stack/commit/35d4ba9cca1a022eaecad63a3083659fe72c0132))
* **sks:** use Kubernetes 1.21.4 by default ([a95d813](https://www.github.com/camptocamp/devops-stack/commit/a95d8135e962a03bf2a12845815af1af94cc2469))
* **sks:** use letsencrypt-prod when there is more than 1 node pool ([#754](https://www.github.com/camptocamp/devops-stack/issues/754)) ([0f8179c](https://www.github.com/camptocamp/devops-stack/commit/0f8179c0d83654442e658ead302ffd5f995a563d))


### Bug Fixes

* **argocd:** fix health assessment for Applications ([c7a46cb](https://www.github.com/camptocamp/devops-stack/commit/c7a46cbe0b3aa4cc134c0e20bd034a883c146e3f))
* **aws:** don't add nat gateway to cluster_endpoint_public_access_cidrs by default ([54625b0](https://www.github.com/camptocamp/devops-stack/commit/54625b04199b9c9920d5bed9b43c769018093a5b))
* **aws:** use local.base_domain instead of var.base_domain ([2583e09](https://www.github.com/camptocamp/devops-stack/commit/2583e092b27651bfb60508805b972136825681af))
* format with terraform fmt ([33a499e](https://www.github.com/camptocamp/devops-stack/commit/33a499e2e6f6ec12a75b1d43f402cacbcc409869))
* **sks:** pass down missing variables to argocd-helm ([#748](https://www.github.com/camptocamp/devops-stack/issues/748)) ([97f3973](https://www.github.com/camptocamp/devops-stack/commit/97f397369e558c0b7a32841cedded4027214f8c5))

## [0.45.0](https://www.github.com/camptocamp/devops-stack/compare/v0.44.0...v0.45.0) (2021-08-27)


### Features

* **kube-prometheus-stack:** upgrade chart to 18.0.1 ([#743](https://www.github.com/camptocamp/devops-stack/issues/743)) ([103dfc6](https://www.github.com/camptocamp/devops-stack/commit/103dfc67be8bfd0ee72ebd6fda60507211fdf163))

## [0.44.0](https://www.github.com/camptocamp/devops-stack/compare/v0.43.0...v0.44.0) (2021-08-26)


### ⚠ BREAKING CHANGES

* **argocd:** upgrade ArgoCD charts and use new repositories spec (#741)

### Features

* **argocd:** upgrade ArgoCD charts and use new repositories spec ([#741](https://www.github.com/camptocamp/devops-stack/issues/741)) ([d4979c7](https://www.github.com/camptocamp/devops-stack/commit/d4979c7808ccddecbda1a5bb431a05bc2f4428ff))
* **k3s:** upgrade camptocamp/k3s/docker module ([0c419db](https://www.github.com/camptocamp/devops-stack/commit/0c419dbce706c12018d0bed6f3fe670d0d76bd7b))
* **k3s:** upgrade K3s to 1.20.10+k3s1 ([6477ac6](https://www.github.com/camptocamp/devops-stack/commit/6477ac6be446392d8fa87a8823968125395574cf))

## [0.43.0](https://www.github.com/camptocamp/devops-stack/compare/v0.42.0...v0.43.0) (2021-08-24)


### Features

* **aks:** set kubernetes version to current default ([4580f26](https://www.github.com/camptocamp/devops-stack/commit/4580f2631b70da36a71b73c0acae8aa386fd6dcd))
* **aks:** upgrade Azure/aks/azurerm module to 4.13.0 ([f47168c](https://www.github.com/camptocamp/devops-stack/commit/f47168c796fee935b36c7afacad5527ef2c9ce87))
* **argocd:** upgrade to v2.1.0 ([3479d25](https://www.github.com/camptocamp/devops-stack/commit/3479d2569d30c9eb71dcefa95244babc9758d712))
* **csi-secrets-store-provider-azure:** upgrade to 0.2.0 ([9a86472](https://www.github.com/camptocamp/devops-stack/commit/9a86472dd102c114f3e1df360870db9bd00c2ac3))
* **sks:** add experimental SKS support ([7e5e929](https://www.github.com/camptocamp/devops-stack/commit/7e5e9294b675c01bd8ac211c242e6cdcbc57ee5c))

## [0.42.0](https://www.github.com/camptocamp/devops-stack/compare/v0.41.2...v0.42.0) (2021-08-19)


### Features

* **aad-pod-identity:** create identities Namespaces ([0358f2d](https://www.github.com/camptocamp/devops-stack/commit/0358f2d5ad55e42892d41a053150b99f8a088375))
* **argocd-applicationset:** upgrade chart version to 1.0.0 ([16fee9d](https://www.github.com/camptocamp/devops-stack/commit/16fee9d65a4310141c0d9b8932cfe5de393a1e9d))
* **argocd-notifications:** upgrade chart version to 1.4.1 ([da3f52c](https://www.github.com/camptocamp/devops-stack/commit/da3f52c5722c88660d7d40241f9991aae1df0344))
* **argocd:** upgrade to v2.0.5 ([f467290](https://www.github.com/camptocamp/devops-stack/commit/f467290c965de75f7d7580da52d71dbb886cbc4b))
* **k3s-docker:** add registry mirror for ghcr.io ([2d26d03](https://www.github.com/camptocamp/devops-stack/commit/2d26d0325478e59ec1d07fd8c24066a1843aa8cd))
* **kube-prometheus-stack:** upgrade to 17.2.1 ([e065fd6](https://www.github.com/camptocamp/devops-stack/commit/e065fd65cfe1730fc94c2d1b7d98b9f45dd6aa18))
* **kube-prometheus-stack:** upgrade to v18.0.0 ([3a299ed](https://www.github.com/camptocamp/devops-stack/commit/3a299edb4aebdd417903c153f355630b7b6e7f8b))
* **loki:** upgrade v2.2.0 ([55ca7e2](https://www.github.com/camptocamp/devops-stack/commit/55ca7e242382ac82fc49e32100b9a53b90812739))
* set CreateNamespace=true syncOption ([53bcc64](https://www.github.com/camptocamp/devops-stack/commit/53bcc649b5d16af7b58c56465a5c8bd9cbc0b3ac))
* **terraform:** upgrade to v1.0.4 ([d2984e4](https://www.github.com/camptocamp/devops-stack/commit/d2984e418a541824d1960e1346a42251d0d6852b))
* **traefik:** upgrade to 2.4.13 ([f26a32e](https://www.github.com/camptocamp/devops-stack/commit/f26a32e25464f0572035bf8b72b2524128218466))


### Bug Fixes

* add missing pathType in Ingress ([f22de25](https://www.github.com/camptocamp/devops-stack/commit/f22de25f6f3629e5d15eb1c6fd21526b54538a7d))
* upgrade k3s/docker module ([774f3e7](https://www.github.com/camptocamp/devops-stack/commit/774f3e7c61465eadc54c1c634420d4b6c247fe94))

### [0.41.2](https://www.github.com/camptocamp/devops-stack/compare/v0.41.1...v0.41.2) (2021-08-12)


### Bug Fixes

* fix weird character in template ([6c903c3](https://www.github.com/camptocamp/devops-stack/commit/6c903c34706b21050adc1a3446e7ea374bbad419))

### [0.41.1](https://www.github.com/camptocamp/devops-stack/compare/v0.41.0...v0.41.1) (2021-08-12)


### Bug Fixes

* **eks:** pass missing arg to function ([5b72586](https://www.github.com/camptocamp/devops-stack/commit/5b725867cd2ef5e95bb148b2cfe678d932843ce8))

## [0.41.0](https://www.github.com/camptocamp/devops-stack/compare/v0.40.0...v0.41.0) (2021-08-11)


### Features

* add http01 solver for acme for AKS and EKS ([ff3188c](https://www.github.com/camptocamp/devops-stack/commit/ff3188c567db0061a4a12412241e49addef3b28a))
* add Release Please Action ([aa781ec](https://www.github.com/camptocamp/devops-stack/commit/aa781ecf3b2d8e25fdcca465a1bd9af4165998c4))
* **cert-manager:** upgrade cert-manager to v1.4.3 ([3bc9c77](https://www.github.com/camptocamp/devops-stack/commit/3bc9c77616d45c13b85daa2a21b01206683b8be6))
* **eks:** expose map_accounts and map_users arguments ([501e3b5](https://www.github.com/camptocamp/devops-stack/commit/501e3b5c417715de2c973767ef773043bac201c1))
* enable support for network policy in azure ([ff14031](https://www.github.com/camptocamp/devops-stack/commit/ff14031467ab0a6eb6f6a284f906858397ed39f7))
* **grafana:** set default users role to Editor ([cd95c03](https://www.github.com/camptocamp/devops-stack/commit/cd95c03dbf73a41c88fd811fe093ab18afe96da2))
* **k3s-libvirt:** upgrade k3os to v0.20.7-k3s1r0 ([873c72b](https://www.github.com/camptocamp/devops-stack/commit/873c72b2553b11d5dde1335230546a4b43c9120e))
* **k3s:** add Keycloak's admin password to Terraform outputs ([305eb67](https://www.github.com/camptocamp/devops-stack/commit/305eb670b5ea70c650eaf25a849ddb293c95a2a6))
* **keycloak:** use embedded H2 database for Keycloak ([1c52e9b](https://www.github.com/camptocamp/devops-stack/commit/1c52e9b02059b7037bad8512c241c1d8cdcd61e1))


### Bug Fixes

* AWS: Filter DNS challenge only on base domain ([e76fd3b](https://www.github.com/camptocamp/devops-stack/commit/e76fd3b8d9e553c07c41876562cdd1fa1f96708b))
* Azure: Filter DNS challenge only on base domain ([687629e](https://www.github.com/camptocamp/devops-stack/commit/687629e7412127a27c807f320e692daef6536e9d)), closes [#700](https://www.github.com/camptocamp/devops-stack/issues/700)
* **k3s:** add missing cluster name in URLs ([093919b](https://www.github.com/camptocamp/devops-stack/commit/093919b5361cff0b64091d239d3db28e3cde68cc))
* selector in same block ([d53cd33](https://www.github.com/camptocamp/devops-stack/commit/d53cd33c593e85e3a0e69482617aced675a4be69))
