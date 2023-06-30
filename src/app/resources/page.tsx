import { ResourcesHeader } from '@/components/resources/ResourcesHeader';
import { isLearningResource } from '@/types/guards';
import { ResourceList } from '@/components/resources/ResourceList';
import { serverSideCmsClient } from '@/services/cms/cms.client';

export default async function Resources() {
  const resources = await serverSideCmsClient.getDatabaseEntries(process.env.RESOURCES_DB_ID, isLearningResource);

  return (
    <div className="flex flex-col px-8">
      <ResourcesHeader />
      <ResourceList data={resources} />
    </div>
  );
}
